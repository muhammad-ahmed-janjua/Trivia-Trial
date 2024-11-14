from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.

class BaseModel(models.Model):
	uid = models.UUIDField(primary_key=True, default=uuid.uuid4 , editable=False)
	created_at = models.DateField(auto_now_add=True)
	updated_at = models.DateField(auto_now_add=True)

	class Meta:
		abstract = True

class UserProfile(BaseModel):
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
	total_score = models.IntegerField(default=0)
	highest_score = models.IntegerField(default=0)
	categories_performance = models.JSONField(default=dict)

	def update_category_performance(self, category_name, score):
		if category_name not in self.categories_performance:
			self.categories_performance[category_name] = {'total_score': 0, 'attempts': 0}
		self.categories_performance[category_name]['total_score'] += score
		self.categories_performance[category_name]['attempts'] += 1
		self.save()


# Quiz Models

class Category(BaseModel):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Question(BaseModel):
    category = models.ForeignKey(Category, related_name='questions', on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return self.text

class Option(BaseModel):
    question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.text} ({'Correct' if self.is_correct else 'Incorrect'})"