import { defineStore } from 'pinia'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useAuthStore = defineStore('auth', {
    state: () => {
        const storedState = localStorage.getItem('authState')
        return storedState ? JSON.parse(storedState) : {
            user: null,
            isAuthenticated: false,
			userStats: null
        }
    },
    actions: {
        async setCsrfToken() {
            await fetch(`${API_BASE_URL}/api/set-csrf-token`, {
                method: 'GET',
                credentials: 'include'
            })
        },

        async login(email, password, router=null) {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCSRFToken()
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            })
            const data = await response.json()
            if (data.success) {
                this.isAuthenticated = true
                this.saveState()
                if (router){
                    await router.push({name: "home"})
                }
            } else {
                this.user = null
                this.isAuthenticated = false
                this.saveState()
            }
        },

        async logout(router=null) {
            try {
                const response = await fetch(`${API_BASE_URL}/logout`, {
                    method: 'POST',
                    headers: {
                        'X-CSRFToken': getCSRFToken()
                    },
                    credentials: 'include'
                })
                if (response.ok) {
                    this.user = null
                    this.isAuthenticated = false
                    this.saveState()
                    if (router){
                        await router.push({name: "login"})
                    }
                }
            } catch (error) {
                console.error('Logout failed', error)
                throw error
            }
        },

        async fetchUser() {
            try {
                const response = await fetch(`${API_BASE_URL}/user`, {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCSRFToken()
                    },
                })
                if (response.ok) {
                    const data = await response.json()
                    this.user = data
                    this.isAuthenticated = true
                }
                else{
                    this.user = null
                    this.isAuthenticated = false
                }
            } catch (error) {
                console.error('Failed to fetch user', error)
                this.user = null
                this.isAuthenticated = false
            }
            this.saveState()
        },

		async fetchUserStats() {
			try {
			  const response = await fetch(`${API_BASE_URL}/user/stats`, {
				method: 'GET',
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json',
				  'X-CSRFToken': getCSRFToken(),
				},
			  });
	  
			  if (response.ok) {
				this.userStats = await response.json();
			  } else {
				console.error('Failed to fetch user stats');
			  }
			} catch (error) {
			  console.error('Error fetching user stats:', error);
			}
		  },

        saveState() {
            localStorage.setItem('authState', JSON.stringify({
                user: this.user,
                isAuthenticated: this.isAuthenticated
            }))
        }
    }
})

export function getCSRFToken() {
    const name = 'csrftoken';
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    if (cookieValue === null) {
        throw 'Missing CSRF cookie.'
    }
    return cookieValue;
}
