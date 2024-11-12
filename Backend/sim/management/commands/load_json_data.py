import os
import json
from django.core.management.base import BaseCommand
from sim.models import Category, Question, Option
from django.conf import settings

# Path to the JSON files directory
JSON_DIRECTORY = os.path.join(settings.BASE_DIR, 'json_categories')

class Command(BaseCommand):
    help = 'Load quiz data from JSON files into the database'

    def handle(self, *args, **kwargs):
        if not os.path.exists(JSON_DIRECTORY):
            self.stdout.write(self.style.ERROR("JSON directory not found."))
            return

        for filename in os.listdir(JSON_DIRECTORY):
            if filename.endswith(".json"):
                file_path = os.path.join(JSON_DIRECTORY, filename)
                with open(file_path, 'r', encoding='utf-8') as json_file:
                    data = json.load(json_file)
                    category_name = data['category']
                    questions = data['questions']

                    category, created = Category.objects.get_or_create(name=category_name)

                    for question_data in questions:
                        question_text = question_data['text']
                        options = question_data['options']
                        correct_answer = question_data['correct_answer']

                        question = Question.objects.create(category=category, text=question_text)

                        for option_text in options:
                            is_correct = (option_text == correct_answer)
                            Option.objects.create(question=question, text=option_text, is_correct=is_correct)

                    self.stdout.write(self.style.SUCCESS(f"Loaded {filename}"))