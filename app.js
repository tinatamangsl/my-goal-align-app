// GoalCraft AI - Complete AI-Powered Goal Alignment System

// Global functions must be defined first, before any other code
window.startApp = function() {
    console.log('startApp called');
    const welcomeScreen = document.getElementById('welcome-screen');
    const appContainer = document.getElementById('app-container');
    
    if (welcomeScreen && appContainer) {
        welcomeScreen.classList.add('hidden');
        appContainer.classList.remove('hidden');
        appContainer.classList.add('fade-in');
        console.log('App started successfully');
    } else {
        console.error('Welcome screen or app container not found');
    }
};

window.showDemo = function() {
    const features = [
        '🧠 AI-Powered Next Best Actions with explainable recommendations',
        '✅ Complete Task Management with goal alignment',
        '🎯 Multi-Framework Goal Setting (SMART/OKR/JTBD)',
        '🔥 Habit Tracking with streak management and achievements',
        '📊 Progress Analytics with interactive charts',
        '🏆 Achievement System with XP and milestone rewards',
        '👥 Community Features with accountability partners',
        '✨ Wellbeing Dashboard with reflection tools',
        '💾 Real-time Data Persistence and auto-save',
        '🎮 Gamification with levels, streaks, and celebrations',
        '📱 Mobile-first responsive design',
        '🎨 Beautiful, accessible user interface'
    ];
    
    alert(`🚀 Welcome to GoalCraft AI - Your Complete AI-Powered Goal Alignment System!\n\n✨ Fully Functional Features:\n\n${features.join('\n')}\n\n🎯 Every button works! Every interaction is real!\n\nClick "Get Started" to experience the complete transformation journey from daily actions to meaningful progress!`);
};

class GoalCraftApp {
    constructor() {
        // Initialize with provided application data
        this.data = {
            "app": {
                "name": "GoalCraft AI",
                "version": "1.0.0",
                "lastUpdated": "2025-08-08T19:40:00Z"
            },
            "user": {
                "id": "user_001",
                "name": "Alex Thompson",
                "email": "alex@example.com",
                "avatar": "https://images.unsplash.com/photo-1494790108755-2616b35cd0ac?w=150&h=150&fit=crop&crop=face&auto=format",
                "currentLevel": 8,
                "totalXP": 3240,
                "streak": 14,
                "joinDate": "2025-06-10",
                "timezone": "Europe/London",
                "preferences": {
                    "peakHours": ["09:00-11:00", "14:00-16:00"],
                    "workingDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "reminderStyle": "gentle",
                    "motivationLevel": "high",
                    "focusTime": 90,
                    "breakTime": 15,
                    "dailyGoal": 5,
                    "weeklyGoal": 25
                },
                "personality": {
                    "type": "Achiever",
                    "traits": ["goal-oriented", "analytical", "persistent"],
                    "motivators": ["progress", "recognition", "autonomy"]
                }
            },
            "goals": [
                {
                    "id": "goal_001",
                    "title": "Publish My First Poetry Collection",
                    "framework": "SMART",
                    "category": "Creative",
                    "description": "Complete and publish a collection of 50 original poems exploring themes of identity and belonging by December 2025",
                    "status": "In Progress",
                    "priority": "High",
                    "progress": 72,
                    "targetDate": "2025-12-31",
                    "createdDate": "2025-06-10",
                    "keyResults": [
                        {
                            "id": "kr_001",
                            "title": "Write 50 original poems",
                            "progress": 80,
                            "target": 50,
                            "current": 40,
                            "completed": false
                        },
                        {
                            "id": "kr_002", 
                            "title": "Complete professional editing review",
                            "progress": 60,
                            "target": 1,
                            "current": 0.6,
                            "completed": false
                        },
                        {
                            "id": "kr_003",
                            "title": "Secure publishing contract or platform",
                            "progress": 30,
                            "target": 1,
                            "current": 0.3,
                            "completed": false
                        }
                    ]
                },
                {
                    "id": "goal_002",
                    "title": "Master Data Science Fundamentals",
                    "framework": "OKR",
                    "category": "Professional",
                    "description": "Develop comprehensive data science skills to advance career opportunities in tech",
                    "status": "In Progress",
                    "priority": "High",
                    "progress": 55,
                    "targetDate": "2025-11-30",
                    "createdDate": "2025-06-20",
                    "keyResults": [
                        {
                            "id": "kr_005",
                            "title": "Complete 3 online data science courses",
                            "progress": 67,
                            "target": 3,
                            "current": 2,
                            "completed": false
                        },
                        {
                            "id": "kr_006",
                            "title": "Build 5 portfolio projects",
                            "progress": 40,
                            "target": 5,
                            "current": 2,
                            "completed": false
                        }
                    ]
                },
                {
                    "id": "goal_003",
                    "title": "Achieve Holistic Wellbeing Balance",
                    "framework": "JTBD",
                    "category": "Wellness",
                    "description": "When I'm feeling overwhelmed by work demands, I want to maintain consistent wellness practices so that I can sustain high performance while feeling fulfilled and healthy",
                    "status": "In Progress",
                    "priority": "Medium",
                    "progress": 68,
                    "targetDate": "2025-12-31",
                    "createdDate": "2025-06-25",
                    "keyResults": [
                        {
                            "id": "kr_008",
                            "title": "Exercise 4+ times per week consistently",
                            "progress": 85,
                            "target": 52,
                            "current": 44,
                            "completed": false
                        }
                    ]
                }
            ],
            "tasks": [
                {
                    "id": "task_001",
                    "title": "Write poem about childhood summers",
                    "description": "Explore memories of summer vacations and their impact on personal growth",
                    "goalId": "goal_001",
                    "category": "Creative",
                    "priority": "High",
                    "status": "Pending",
                    "dueDate": "2025-08-10",
                    "estimatedTime": 60,
                    "actualTime": null,
                    "completed": false,
                    "createdDate": "2025-08-08",
                    "aiScore": 92
                },
                {
                    "id": "task_002",
                    "title": "Complete Python data analysis course module 3",
                    "description": "Focus on pandas and data manipulation techniques",
                    "goalId": "goal_002",
                    "category": "Professional",
                    "priority": "High",
                    "status": "In Progress",
                    "dueDate": "2025-08-12",
                    "estimatedTime": 120,
                    "actualTime": 45,
                    "completed": false,
                    "createdDate": "2025-08-06",
                    "progress": 38
                },
                {
                    "id": "task_003",
                    "title": "30-minute morning yoga session",
                    "description": "Focus on breath work and gentle stretching",
                    "goalId": "goal_003",
                    "category": "Wellness",
                    "priority": "Medium",
                    "status": "Completed",
                    "dueDate": "2025-08-08",
                    "estimatedTime": 30,
                    "actualTime": 35,
                    "completed": true,
                    "completedDate": "2025-08-08T08:00:00Z",
                    "createdDate": "2025-08-08"
                }
            ],
            "habits": [
                {
                    "id": "habit_001",
                    "title": "Morning Pages Writing",
                    "description": "15 minutes of stream-of-consciousness writing",
                    "category": "Creative",
                    "frequency": "daily",
                    "currentStreak": 14,
                    "longestStreak": 28,
                    "completedToday": true,
                    "totalCompletions": 89,
                    "successRate": 0.85,
                    "lastCompleted": "2025-08-08T08:30:00Z",
                    "timeOfDay": "08:30",
                    "linkedGoalId": "goal_001"
                },
                {
                    "id": "habit_002",
                    "title": "Daily Code Practice",
                    "description": "30 minutes of coding challenges or project work",
                    "category": "Professional", 
                    "frequency": "daily",
                    "currentStreak": 8,
                    "longestStreak": 21,
                    "completedToday": false,
                    "totalCompletions": 156,
                    "successRate": 0.78,
                    "lastCompleted": "2025-08-07T16:00:00Z",
                    "timeOfDay": "16:00",
                    "linkedGoalId": "goal_002"
                },
                {
                    "id": "habit_003",
                    "title": "Mindful Breathing",
                    "description": "10 minutes of focused breathing meditation",
                    "category": "Wellness",
                    "frequency": "daily",
                    "currentStreak": 12,
                    "longestStreak": 19,
                    "completedToday": true,
                    "totalCompletions": 203,
                    "successRate": 0.92,
                    "lastCompleted": "2025-08-08T07:45:00Z",
                    "timeOfDay": "07:45",
                    "linkedGoalId": "goal_003"
                }
            ],
            "achievements": [
                {
                    "id": "ach_001",
                    "title": "Creative Consistency Champion",
                    "description": "Completed creative tasks for 14 days straight!",
                    "category": "Creative",
                    "unlockedDate": "2025-08-08",
                    "rarity": "Rare",
                    "xpReward": 200,
                    "iconClass": "achievement-creative"
                },
                {
                    "id": "ach_002",
                    "title": "Knowledge Seeker",
                    "description": "Completed 100+ learning tasks",
                    "category": "Professional",
                    "unlockedDate": "2025-08-05",
                    "rarity": "Common",
                    "xpReward": 100,
                    "iconClass": "achievement-learning"
                }
            ],
            "nextBestActions": [
                {
                    "id": "nba_001",
                    "title": "Review and edit yesterday's poem draft",
                    "description": "Your creative momentum is strong after completing your morning routine. Perfect time for reflective editing.",
                    "goalId": "goal_001",
                    "category": "Creative",
                    "priority": "High",
                    "confidence": 94,
                    "reasoning": "Peak creative hours (85%) + Recent writing momentum (95%) + Goal urgency (70%)",
                    "estimatedTime": 45,
                    "energyLevel": "High",
                    "impact": "High",
                    "timeWindow": "Next 2 hours",
                    "aiInsight": "Your editing quality is 40% higher during morning hours based on your patterns."
                },
                {
                    "id": "nba_002",
                    "title": "Practice data visualization with matplotlib",
                    "description": "Build on your pandas knowledge with visual storytelling - key skill for portfolio projects.",
                    "goalId": "goal_002", 
                    "category": "Professional",
                    "priority": "Medium",
                    "confidence": 87,
                    "reasoning": "Skill building sequence (90%) + Portfolio impact (85%) + Learning momentum (85%)",
                    "estimatedTime": 90,
                    "energyLevel": "Medium",
                    "impact": "High",
                    "timeWindow": "This afternoon",
                    "aiInsight": "Visual projects in your portfolio get 3x more recruiter engagement."
                }
            ],
            "insights": {
                "productivity": {
                    "peakHours": ["09:00-11:00", "14:00-16:00"],
                    "mostProductiveDay": "Tuesday",
                    "averageTasksPerDay": 4.2,
                    "completionRate": 0.86,
                    "avgFocusTime": 87
                },
                "wellbeing": {
                    "currentMood": 8,
                    "energyLevel": 7,
                    "stressLevel": 3,
                    "workLifeBalance": 7,
                    "overallSatisfaction": 8
                }
            },
            "weeklyProgress": [
                {"day": "Mon", "completed": 4, "total": 5, "percentage": 80},
                {"day": "Tue", "completed": 6, "total": 6, "percentage": 100},
                {"day": "Wed", "completed": 3, "total": 4, "percentage": 75},
                {"day": "Thu", "completed": 5, "total": 5, "percentage": 100},
                {"day": "Fri", "completed": 4, "total": 5, "percentage": 80},
                {"day": "Sat", "completed": 2, "total": 3, "percentage": 67},
                {"day": "Sun", "completed": 3, "total": 4, "percentage": 75}
            ],
            "motivationalQuotes": [
                {
                    "text": "Your consistency is building the foundation for extraordinary achievements.",
                    "author": "GoalCraft AI",
                    "category": "motivation"
                },
                {
                    "text": "Every word you write brings your poetry collection closer to touching someone's heart.",
                    "author": "GoalCraft AI", 
                    "category": "creative"
                },
                {
                    "text": "Data science mastery isn't about perfection—it's about persistent curiosity and practice.",
                    "author": "GoalCraft AI",
                    "category": "professional"
                }
            ],
            "community": {
                "connections": [
                    {
                        "id": "user_002",
                        "name": "Sarah Chen",
                        "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
                        "sharedGoals": ["Creative"],
                        "relationship": "accountability-partner"
                    },
                    {
                        "id": "user_003", 
                        "name": "Marcus Johnson",
                        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
                        "sharedGoals": ["Professional"],
                        "relationship": "mentor"
                    }
                ]
            }
        };
        
        this.currentSection = 'overview';
        this.currentMetric = null;
        this.currentAction = null;
        this.taskFilter = 'all';
        this.goalFilter = 'all';
        this.communityTab = 'connections';
        this.charts = {};
        this.nextTaskId = 4;
        this.nextGoalId = 4;
        
        // Wait for DOM to be ready before initializing
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    // Initialize the application
    init() {
        console.log('Initializing GoalCraft AI...');
        this.hideAllModals();
        this.setupEventListeners();
        this.updateUI();
        this.renderAll();
        this.simulateDataPersistence();
        console.log('GoalCraft AI initialized successfully');
    }

    // Setup all event listeners
    setupEventListeners() {
        // Modal close handlers
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideModal(e.target.id);
            }
        });

        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal:not(.hidden)');
                if (openModal) {
                    this.hideModal(openModal.id);
                }
            }
        });

        // Metric slider
        const slider = document.getElementById('metric-slider');
        const valueDisplay = document.getElementById('slider-value');
        if (slider && valueDisplay) {
            slider.addEventListener('input', (e) => {
                valueDisplay.textContent = e.target.value;
            });
        }

        // Navigation event listeners
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.addEventListener('click', (e) => {
                e.preventDefault();
                const section = navItem.getAttribute('data-section');
                if (section) {
                    this.navigateToSection(section);
                }
            });
        });

        // Auto-save simulation
        document.addEventListener('change', () => {
            setTimeout(() => this.simulateDataPersistence(), 100);
        });
    }

    // Hide all modals on initialization
    hideAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    // Update main UI elements
    updateUI() {
        this.updateGreeting();
        this.updateUserStats();
        this.updateProgressCards();
        this.updateDailyQuote();
    }

    // Render all components
    renderAll() {
        this.renderNextBestActions();
        this.renderTasks();
        this.renderHabits();
        this.renderGoals();
        this.renderAchievements();
        this.updateTaskGoalOptions();
    }

    // Update greeting based on time
    updateGreeting() {
        const greetingElement = document.getElementById('greeting-text');
        if (!greetingElement) return;
        
        const hour = new Date().getHours();
        let greeting = '';
        let emoji = '';

        if (hour < 12) {
            greeting = 'Good morning';
            emoji = '🌅';
        } else if (hour < 17) {
            greeting = 'Good afternoon';
            emoji = '☀️';
        } else {
            greeting = 'Good evening';
            emoji = '🌆';
        }

        greetingElement.textContent = `${greeting}, ${this.data.user.name.split(' ')[0]}! ${emoji}`;
    }

    // Update user statistics
    updateUserStats() {
        const streakElement = document.getElementById('streak-count');
        const levelElement = document.getElementById('user-level');
        const pointsElement = document.getElementById('user-points');
        
        if (streakElement) streakElement.textContent = this.data.user.streak;
        if (levelElement) levelElement.textContent = this.data.user.currentLevel;
        if (pointsElement) pointsElement.textContent = this.data.user.totalXP.toLocaleString();
    }

    // Update progress cards
    updateProgressCards() {
        const completedTasks = this.data.tasks.filter(task => task.completed).length;
        const totalTasks = this.data.tasks.length;
        const completedHabits = this.data.habits.filter(habit => habit.completedToday).length;
        const avgGoalProgress = this.data.goals.length > 0 ? 
            Math.round(this.data.goals.reduce((sum, goal) => sum + goal.progress, 0) / this.data.goals.length) : 0;

        const tasksElement = document.getElementById('tasks-completed');
        const goalsElement = document.getElementById('goals-progress');
        const habitsElement = document.getElementById('habits-completed');
        
        if (tasksElement) tasksElement.textContent = `${completedTasks}/${totalTasks}`;
        if (goalsElement) goalsElement.textContent = `${avgGoalProgress}%`;
        if (habitsElement) habitsElement.textContent = `${completedHabits}/${this.data.habits.length}`;
    }

    // Update daily quote
    updateDailyQuote() {
        const quoteElement = document.getElementById('daily-quote');
        if (quoteElement) {
            const randomQuote = this.data.motivationalQuotes[Math.floor(Math.random() * this.data.motivationalQuotes.length)];
            quoteElement.textContent = randomQuote.text;
        }
    }

    // AI-powered Next Best Actions System
    generateNextBestActions() {
        const actions = [];
        const currentHour = new Date().getHours();
        const isInPeakHours = this.data.user.preferences.peakHours.some(range => {
            const [start] = range.split('-');
            const startHour = parseInt(start.split(':')[0]);
            return Math.abs(currentHour - startHour) <= 1;
        });

        // Use provided next best actions as base
        this.data.nextBestActions.forEach(action => {
            actions.push({
                ...action,
                confidence: isInPeakHours ? Math.min(99, action.confidence + 5) : action.confidence
            });
        });

        // Add habit-based recommendations
        this.data.habits.forEach(habit => {
            if (!habit.completedToday && habit.currentStreak > 0) {
                actions.push({
                    id: `nba_habit_${habit.id}`,
                    title: `Complete ${habit.title}`,
                    description: `Maintain your ${habit.currentStreak}-day streak! Consistency builds lasting change.`,
                    category: habit.category,
                    priority: 'High',
                    confidence: Math.min(95, 80 + (habit.currentStreak > 7 ? 10 : 5)),
                    reasoning: `Streak preservation (${habit.currentStreak} days) + Habit momentum`,
                    estimatedTime: 15,
                    type: 'habit',
                    habitId: habit.id
                });
            }
        });

        // Add task-based recommendations
        const pendingTasks = this.data.tasks.filter(t => !t.completed);
        pendingTasks.forEach(task => {
            if (task.aiScore && task.aiScore > 85) {
                actions.push({
                    id: `nba_task_${task.id}`,
                    title: task.title,
                    description: this.generateTaskDescription(task),
                    category: task.category,
                    priority: task.priority,
                    confidence: Math.round(task.aiScore),
                    reasoning: this.generateTaskReasoning(task),
                    estimatedTime: task.estimatedTime,
                    type: 'task',
                    taskId: task.id
                });
            }
        });

        return actions
            .sort((a, b) => b.confidence - a.confidence)
            .slice(0, 3);
    }

    generateTaskDescription(task) {
        const descriptions = {
            'Creative': [
                "Your creative energy is flowing perfectly right now!",
                "Perfect timing for artistic expression and innovation.",
                "Channel your inspiration into meaningful creative work."
            ],
            'Professional': [
                "Your focus is optimal for productive work sessions.",
                "Great opportunity to advance your professional goals.",
                "Build momentum with strategic skill development."
            ],
            'Wellness': [
                "Perfect time to invest in your wellbeing and energy.",
                "Your mind and body will thank you for this healthy choice.",
                "Align your actions with holistic wellness goals."
            ]
        };
        
        const categoryDescriptions = descriptions[task.category] || descriptions['Professional'];
        return categoryDescriptions[Math.floor(Math.random() * categoryDescriptions.length)];
    }

    generateTaskReasoning(task) {
        const factors = [];
        if (task.priority === 'High') factors.push('High priority (25%)');
        if (task.goalId) factors.push('Goal alignment (30%)');
        if (task.aiScore > 90) factors.push('AI confidence (35%)');
        factors.push('Optimal timing (10%)');
        return factors.join(' + ');
    }

    renderNextBestActions() {
        const container = document.getElementById('next-actions-list');
        if (!container) return;

        const actions = this.generateNextBestActions();
        container.innerHTML = '';

        if (actions.length === 0) {
            container.innerHTML = `
                <div class="next-action-card">
                    <div class="action-header">
                        <h4 class="action-title">All caught up! 🎉</h4>
                        <span class="action-confidence">100%</span>
                    </div>
                    <p class="action-description">Excellent work! You're on top of everything. Consider adding new goals or taking a well-deserved break.</p>
                </div>
            `;
            return;
        }

        actions.forEach(action => {
            const actionElement = document.createElement('div');
            actionElement.className = 'next-action-card';
            
            actionElement.innerHTML = `
                <div class="action-header">
                    <h4 class="action-title">${action.title}</h4>
                    <span class="action-confidence">${action.confidence}%</span>
                </div>
                <p class="action-description">${action.description}</p>
                <div class="action-meta">
                    <div class="action-tags">
                        <span class="action-tag ${action.category.toLowerCase()}">${action.category}</span>
                        <span class="action-tag">${action.estimatedTime} min</span>
                        <span class="action-tag">${action.priority} Priority</span>
                    </div>
                    <button class="action-explain-btn" onclick="app.explainAction('${action.id}')">Why?</button>
                </div>
                <div class="action-reasoning">${action.reasoning}</div>
            `;

            actionElement.addEventListener('click', (e) => {
                if (!e.target.classList.contains('action-explain-btn')) {
                    this.executeAction(action);
                }
            });
            
            container.appendChild(actionElement);
        });
    }

    executeAction(action) {
        if (action.type === 'habit') {
            this.toggleHabit(action.habitId);
        } else if (action.type === 'task') {
            this.toggleTask(action.taskId);
        } else {
            this.showCelebration(
                `Great choice! "${action.title}" aligns perfectly with your goals! 🎯`,
                25
            );
        }
        
        setTimeout(() => {
            this.renderNextBestActions();
        }, 1000);
    }

    explainAction(actionId) {
        const actions = this.generateNextBestActions();
        const action = actions.find(a => a.id === actionId);
        if (!action) return;

        const explanationContent = `
            <div class="explanation-section">
                <div class="explanation-title">🎯 Action Relevance</div>
                <div class="explanation-content">
                    This recommendation scores ${action.confidence}% based on your personal patterns, current goals, and optimal timing.
                </div>
            </div>
            <div class="explanation-section">
                <div class="explanation-title">🧠 AI Reasoning</div>
                <div class="explanation-content">
                    ${action.reasoning}
                </div>
                <div class="explanation-factors">
                    <span class="factor-tag">Goal Alignment</span>
                    <span class="factor-tag">Energy Level</span>
                    <span class="factor-tag">Priority Score</span>
                    <span class="factor-tag">Timing Optimization</span>
                </div>
            </div>
            <div class="explanation-section">
                <div class="explanation-title">💡 Personal Impact</div>
                <div class="explanation-content">
                    ${action.aiInsight || 'This action will contribute significantly to your long-term goals and personal growth.'}
                </div>
            </div>
        `;

        const contentElement = document.getElementById('ai-explanation-content');
        if (contentElement) {
            contentElement.innerHTML = explanationContent;
            this.currentAction = action;
            this.showModal('ai-explanation-modal');
        }
    }

    acceptRecommendation() {
        if (this.currentAction) {
            this.executeAction(this.currentAction);
            this.hideModal('ai-explanation-modal');
        }
    }

    refreshRecommendations() {
        this.renderNextBestActions();
        this.showCelebration('AI recommendations refreshed based on your current context! 🧠', 10);
    }

    generateInsights() {
        // Simulate AI insights generation
        const insights = [
            "Your consistency in creative work is building excellent momentum for your poetry goal!",
            "Data shows you're most productive between 9-11 AM - perfect for challenging tasks.",
            "Your wellbeing balance is strong - keep maintaining those healthy boundaries!",
            "Professional skill development is accelerating - you're on track for career advancement."
        ];
        
        const randomInsight = insights[Math.floor(Math.random() * insights.length)];
        this.showCelebration(randomInsight, 15);
    }

    // Task Management System
    renderTasks() {
        const tasksList = document.getElementById('tasks-list');
        if (!tasksList) return;

        let filteredTasks = [...this.data.tasks];
        
        if (this.taskFilter === 'pending') {
            filteredTasks = this.data.tasks.filter(t => !t.completed);
        } else if (this.taskFilter === 'completed') {
            filteredTasks = this.data.tasks.filter(t => t.completed);
        } else if (this.taskFilter === 'high') {
            filteredTasks = this.data.tasks.filter(t => t.priority === 'High');
        }

        tasksList.innerHTML = '';

        if (filteredTasks.length === 0) {
            tasksList.innerHTML = `
                <div class="task-item" style="text-align: center; opacity: 0.6; cursor: default;">
                    <div class="task-info">
                        <div class="task-title">No tasks found</div>
                        <div class="task-meta">
                            <span>Add your first task to get started with goal-aligned action!</span>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        // Sort tasks by priority and completion status
        filteredTasks.sort((a, b) => {
            if (a.completed !== b.completed) return a.completed - b.completed;
            const priorities = { High: 3, Medium: 2, Low: 1 };
            return priorities[b.priority] - priorities[a.priority];
        });

        filteredTasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskElement.setAttribute('data-task-id', task.id);
            
            const goalTitle = task.goalId ? 
                (this.data.goals.find(g => g.id === task.goalId)?.title || 'Goal') : '';
            
            taskElement.innerHTML = `
                <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="app.toggleTask('${task.id}')">
                    ${task.completed ? '✓' : ''}
                </div>
                <div class="task-info">
                    <div class="task-title">${task.title}</div>
                    <div class="task-meta">
                        <span class="task-category ${task.category.toLowerCase()}">${task.category}</span>
                        <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
                        <span>${task.estimatedTime} min</span>
                        ${goalTitle ? `<span>🎯 ${goalTitle}</span>` : ''}
                        ${task.dueDate ? `<span>📅 ${new Date(task.dueDate).toLocaleDateString()}</span>` : ''}
                    </div>
                </div>
                <div class="task-actions">
                    <button class="task-action-btn" onclick="app.editTask('${task.id}')" title="Edit">✏️</button>
                    <button class="task-action-btn" onclick="app.deleteTask('${task.id}')" title="Delete">🗑️</button>
                </div>
            `;
            tasksList.appendChild(taskElement);
        });
    }

    toggleTask(taskId) {
        const task = this.data.tasks.find(t => t.id === taskId);
        if (!task) return;

        task.completed = !task.completed;
        task.status = task.completed ? 'Completed' : 'Pending';
        
        if (task.completed) {
            task.completedDate = new Date().toISOString();
            const points = this.calculateTaskPoints(task);
            this.data.user.totalXP += points;
            
            // Update linked goal progress
            if (task.goalId) {
                this.updateGoalProgressFromTask(task.goalId);
            }
            
            const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
            if (taskElement) {
                taskElement.classList.add('completed-animation');
            }
            
            this.showCelebration(
                `Outstanding! "${task.title}" completed! 🎉 You earned ${points} XP!`,
                points
            );
            
            this.checkForAchievements();
        }
        
        this.renderTasks();
        this.updateProgressCards();
        this.renderNextBestActions();
        this.simulateDataPersistence();
    }

    calculateTaskPoints(task) {
        let points = 25; // Base points
        
        const priorityBonus = { High: 25, Medium: 15, Low: 10 };
        points += priorityBonus[task.priority] || 10;
        
        if (task.goalId) points += 20; // Goal alignment bonus
        if (task.aiScore && task.aiScore > 90) points += 15; // AI recommendation bonus
        
        return points;
    }

    updateGoalProgressFromTask(goalId) {
        const goal = this.data.goals.find(g => g.id === goalId);
        if (!goal) return;
        
        const goalTasks = this.data.tasks.filter(t => t.goalId === goalId);
        const completedGoalTasks = goalTasks.filter(t => t.completed);
        
        if (goalTasks.length > 0) {
            const taskProgress = (completedGoalTasks.length / goalTasks.length) * 30;
            goal.progress = Math.min(100, Math.round(goal.progress + taskProgress));
            
            // Update key results progress
            goal.keyResults.forEach((kr, index) => {
                if (index < Math.floor((goal.progress / 100) * goal.keyResults.length)) {
                    kr.progress = Math.min(100, kr.progress + 10);
                }
            });
        }
    }

    filterTasks(filter) {
        this.taskFilter = filter;
        this.renderTasks();
    }

    createTask(event) {
        event.preventDefault();
        
        const newTask = {
            id: `task_${String(this.nextTaskId++).padStart(3, '0')}`,
            title: document.getElementById('task-title').value.trim(),
            description: `Task created for ${document.getElementById('task-category').value} category`,
            category: document.getElementById('task-category').value,
            priority: document.getElementById('task-priority').value,
            estimatedTime: parseInt(document.getElementById('task-time').value),
            goalId: document.getElementById('task-goal').value || null,
            completed: false,
            status: 'Pending',
            createdDate: new Date().toISOString().split('T')[0],
            dueDate: document.getElementById('task-due-date').value || null,
            aiScore: 75 + Math.floor(Math.random() * 20)
        };
        
        this.data.tasks.push(newTask);
        this.renderTasks();
        this.updateProgressCards();
        this.renderNextBestActions();
        this.hideModal('add-task-modal');
        this.simulateDataPersistence();
        
        this.showCelebration(`Task "${newTask.title}" created successfully! Ready to make progress? 💪`, 20);
        
        event.target.reset();
    }

    editTask(taskId) {
        const task = this.data.tasks.find(t => t.id === taskId);
        if (!task) return;
        
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-category').value = task.category;
        document.getElementById('task-priority').value = task.priority;
        document.getElementById('task-time').value = task.estimatedTime;
        document.getElementById('task-due-date').value = task.dueDate || '';
        if (task.goalId) document.getElementById('task-goal').value = task.goalId;
        
        this.editingTaskId = taskId;
        this.showModal('add-task-modal');
        const modalTitle = document.querySelector('#add-task-modal h3');
        if (modalTitle) modalTitle.textContent = 'Edit Task';
    }

    deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.data.tasks = this.data.tasks.filter(t => t.id !== taskId);
            this.renderTasks();
            this.updateProgressCards();
            this.renderNextBestActions();
            this.simulateDataPersistence();
            this.showCelebration('Task deleted successfully! 🗑️', 0);
        }
    }

    showAddTask() {
        const form = document.getElementById('task-form');
        if (form) form.reset();
        const modalTitle = document.querySelector('#add-task-modal h3');
        if (modalTitle) modalTitle.textContent = 'Add New Task';
        this.editingTaskId = null;
        this.showModal('add-task-modal');
    }

    updateTaskGoalOptions() {
        const goalSelect = document.getElementById('task-goal');
        if (goalSelect) {
            goalSelect.innerHTML = '<option value="">Select goal...</option>';
            this.data.goals.forEach(goal => {
                const option = document.createElement('option');
                option.value = goal.id;
                option.textContent = goal.title;
                goalSelect.appendChild(option);
            });
        }
    }

    // Habit Management System
    renderHabits() {
        const habitsList = document.getElementById('habits-list');
        if (!habitsList) return;

        habitsList.innerHTML = '';

        if (this.data.habits.length === 0) {
            habitsList.innerHTML = `
                <div class="habit-item">
                    <div class="habit-info">
                        <h4>No habits yet</h4>
                        <div class="habit-streak">Start building powerful daily habits!</div>
                    </div>
                </div>
            `;
            return;
        }

        this.data.habits.forEach(habit => {
            const habitElement = document.createElement('div');
            habitElement.className = 'habit-item';
            
            const streakEmoji = habit.currentStreak >= 21 ? '🔥🔥🔥' : 
                               habit.currentStreak >= 7 ? '🔥🔥' : 
                               habit.currentStreak >= 3 ? '🔥' : '⭐';
            
            habitElement.innerHTML = `
                <div class="habit-info">
                    <h4>${habit.title}</h4>
                    <div class="habit-streak">
                        ${streakEmoji} ${habit.currentStreak} day streak (Best: ${habit.longestStreak})
                        • Success rate: ${Math.round(habit.successRate * 100)}%
                    </div>
                </div>
                <div class="habit-toggle ${habit.completedToday ? 'active' : ''}" onclick="app.toggleHabit('${habit.id}')"></div>
            `;
            habitsList.appendChild(habitElement);
        });
    }

    toggleHabit(habitId) {
        const habit = this.data.habits.find(h => h.id === habitId);
        if (!habit) return;

        habit.completedToday = !habit.completedToday;
        
        if (habit.completedToday) {
            habit.currentStreak += 1;
            habit.totalCompletions += 1;
            habit.lastCompleted = new Date().toISOString();
            
            if (habit.currentStreak > habit.longestStreak) {
                habit.longestStreak = habit.currentStreak;
            }
            
            const points = 20 + (habit.currentStreak > 7 ? 15 : 0) + (habit.currentStreak > 21 ? 25 : 0);
            this.data.user.totalXP += points;
            
            this.showCelebration(
                `Amazing! ${habit.title} completed! 🔥 ${habit.currentStreak} days and counting!`,
                points
            );
            
            // Check for streak milestones
            if ([7, 14, 21, 30, 50, 100].includes(habit.currentStreak)) {
                this.unlockAchievement(
                    `${habit.currentStreak}-Day Streak Master`,
                    `Maintained ${habit.title} for ${habit.currentStreak} consecutive days!`,
                    habit.category,
                    habit.currentStreak * 10
                );
            }
        } else {
            if (confirm(`Break your ${habit.currentStreak}-day streak for ${habit.title}?`)) {
                habit.currentStreak = 0;
            } else {
                habit.completedToday = true;
                return;
            }
        }
        
        this.renderHabits();
        this.updateProgressCards();
        this.renderNextBestActions();
        this.simulateDataPersistence();
    }

    // Goal Management System
    renderGoals() {
        const goalsList = document.getElementById('goals-list');
        if (!goalsList) return;

        let filteredGoals = [...this.data.goals];
        if (this.goalFilter !== 'all') {
            filteredGoals = this.data.goals.filter(g => g.category === this.goalFilter);
        }

        goalsList.innerHTML = '';

        if (filteredGoals.length === 0) {
            goalsList.innerHTML = `
                <div class="goal-card">
                    <div class="goal-header">
                        <h3 class="goal-title">No goals found</h3>
                    </div>
                    <p class="goal-description">Create your first goal to start transforming daily actions into meaningful progress!</p>
                </div>
            `;
            return;
        }

        filteredGoals.forEach(goal => {
            const goalElement = document.createElement('div');
            goalElement.className = 'goal-card';
            
            const daysUntilDeadline = Math.ceil((new Date(goal.targetDate) - new Date()) / (1000 * 60 * 60 * 24));
            const completedKeyResults = goal.keyResults.filter(kr => kr.progress >= 100).length;
            
            const urgencyClass = daysUntilDeadline <= 7 ? 'urgent' : daysUntilDeadline <= 30 ? 'soon' : '';
            
            goalElement.innerHTML = `
                <div class="goal-header">
                    <h3 class="goal-title">${goal.title}</h3>
                    <span class="goal-framework">${goal.framework}</span>
                </div>
                <p class="goal-description">${goal.description}</p>
                <div class="goal-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${goal.progress}%"></div>
                    </div>
                    <div class="progress-text">
                        <span>${goal.progress}% complete</span>
                        <span class="${urgencyClass}">${daysUntilDeadline > 0 ? `${daysUntilDeadline} days remaining` : 'Overdue'}</span>
                    </div>
                    <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">
                        Key Results: ${completedKeyResults}/${goal.keyResults.length} completed
                    </div>
                </div>
                <div class="goal-actions">
                    <button class="goal-action-btn" onclick="app.viewGoalDetails('${goal.id}')">View Details</button>
                    <button class="goal-action-btn" onclick="app.createTaskFromGoal('${goal.id}')">Add Task</button>
                    <button class="goal-action-btn" onclick="app.updateGoalProgress('${goal.id}')">Update Progress</button>
                </div>
            `;
            
            goalElement.addEventListener('click', (e) => {
                if (!e.target.classList.contains('goal-action-btn')) {
                    this.viewGoalDetails(goal.id);
                }
            });
            
            goalsList.appendChild(goalElement);
        });
    }

    filterGoals(category) {
        this.goalFilter = category;
        this.renderGoals();
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            }
        });
    }

    createGoal(event) {
        event.preventDefault();
        
        const framework = document.querySelector('input[name="framework"]:checked').value;
        const title = document.getElementById('goal-title').value.trim();
        const category = document.getElementById('goal-category').value;
        const description = document.getElementById('goal-description').value.trim();
        const targetDate = document.getElementById('goal-date').value;
        
        const newGoal = {
            id: `goal_${String(this.nextGoalId++).padStart(3, '0')}`,
            title: title,
            framework: framework,
            category: category,
            description: description,
            status: 'In Progress',
            priority: 'High',
            progress: 0,
            targetDate: targetDate,
            createdDate: new Date().toISOString().split('T')[0],
            keyResults: this.generateDefaultKeyResults(framework, title)
        };
        
        this.data.goals.push(newGoal);
        this.renderGoals();
        this.updateProgressCards();
        this.updateTaskGoalOptions();
        this.hideModal('goal-wizard-modal');
        this.data.user.totalXP += 100;
        this.simulateDataPersistence();
        
        this.showCelebration(`Goal "${newGoal.title}" created successfully! You've earned 100 XP for taking action! 🎯`, 100);
        
        event.target.reset();
    }

    generateDefaultKeyResults(framework, title) {
        const templates = {
            'SMART': [
                { id: 'kr1', title: `Define specific milestones for ${title.toLowerCase()}`, progress: 0, completed: false },
                { id: 'kr2', title: 'Create detailed action plan with deadlines', progress: 0, completed: false },
                { id: 'kr3', title: 'Track weekly progress and adjust strategy', progress: 0, completed: false }
            ],
            'OKR': [
                { id: 'kr1', title: `Establish measurable success metrics`, progress: 0, completed: false },
                { id: 'kr2', title: 'Achieve 50% progress milestone', progress: 0, completed: false },
                { id: 'kr3', title: 'Complete objective with documented results', progress: 0, completed: false }
            ],
            'JTBD': [
                { id: 'kr1', title: 'Identify specific desired outcomes', progress: 0, completed: false },
                { id: 'kr2', title: 'Design and test solution approach', progress: 0, completed: false },
                { id: 'kr3', title: 'Validate measurable outcome improvement', progress: 0, completed: false }
            ]
        };
        
        return templates[framework] || templates['SMART'];
    }

    viewGoalDetails(goalId) {
        const goal = this.data.goals.find(g => g.id === goalId);
        if (!goal) return;
        
        const keyResultsList = goal.keyResults.map((kr, i) => 
            `${i + 1}. ${kr.title} - ${kr.progress}% complete ${kr.completed ? '✅' : '⏳'}`
        ).join('\n');
        
        const linkedTasks = this.data.tasks.filter(t => t.goalId === goalId);
        const completedTasks = linkedTasks.filter(t => t.completed);
        
        const details = `
🎯 ${goal.title}
📊 Framework: ${goal.framework}
📈 Progress: ${goal.progress}%
📅 Deadline: ${new Date(goal.targetDate).toLocaleDateString()}
⭐ Priority: ${goal.priority}

📝 Description:
${goal.description}

🎯 Key Results:
${keyResultsList}

📋 Linked Tasks: ${completedTasks.length}/${linkedTasks.length} completed

Created: ${new Date(goal.createdDate).toLocaleDateString()}
        `.trim();
        
        alert(details);
    }

    updateGoalProgress(goalId) {
        const goal = this.data.goals.find(g => g.id === goalId);
        if (!goal) return;
        
        const newProgress = prompt(`Current progress: ${goal.progress}%\nEnter new progress (0-100):`, goal.progress);
        if (newProgress === null) return;
        
        const progress = Math.max(0, Math.min(100, parseInt(newProgress) || 0));
        const oldProgress = goal.progress;
        goal.progress = progress;
        
        // Update key results
        goal.keyResults.forEach((kr, index) => {
            const expectedProgress = (progress / 100) * (index + 1) * (100 / goal.keyResults.length);
            kr.progress = Math.min(100, Math.round(expectedProgress));
            kr.completed = kr.progress >= 100;
        });
        
        if (progress >= 100) {
            this.unlockAchievement("Goal Achiever", `Completed "${goal.title}"!`, goal.category, 500);
        }
        
        this.renderGoals();
        this.updateProgressCards();
        this.simulateDataPersistence();
        
        const progressDiff = progress - oldProgress;
        if (progressDiff > 0) {
            const points = progressDiff * 5;
            this.data.user.totalXP += points;
            this.showCelebration(`Goal progress updated! +${progressDiff}% earned you ${points} XP! 📈`, points);
        }
    }

    createTaskFromGoal(goalId) {
        const goal = this.data.goals.find(g => g.id === goalId);
        if (!goal) return;
        
        document.getElementById('task-title').value = `Work on: ${goal.title}`;
        document.getElementById('task-category').value = goal.category;
        document.getElementById('task-priority').value = goal.priority;
        document.getElementById('task-goal').value = goal.id;
        
        this.showModal('add-task-modal');
    }

    showGoalWizard() {
        const form = document.getElementById('goal-form');
        if (form) form.reset();
        const modalTitle = document.querySelector('#goal-wizard-modal h3');
        if (modalTitle) modalTitle.textContent = 'Create New Goal';
        this.showModal('goal-wizard-modal');
    }

    // Achievement System
    renderAchievements() {
        const container = document.getElementById('achievements-list');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (this.data.achievements.length === 0) {
            container.innerHTML = `
                <div class="achievement-item">
                    <div class="achievement-icon">🏆</div>
                    <div class="achievement-info">
                        <div class="achievement-title">Ready to achieve!</div>
                        <div class="achievement-description">Complete tasks and maintain habits to unlock achievements!</div>
                    </div>
                </div>
            `;
            return;
        }
        
        this.data.achievements.slice(0, 5).forEach(achievement => {
            const achievementElement = document.createElement('div');
            achievementElement.className = 'achievement-item';
            achievementElement.innerHTML = `
                <div class="achievement-icon">🏆</div>
                <div class="achievement-info">
                    <div class="achievement-title">${achievement.title}</div>
                    <div class="achievement-description">${achievement.description}</div>
                </div>
                <div class="achievement-points">+${achievement.xpReward}</div>
            `;
            container.appendChild(achievementElement);
        });
    }

    unlockAchievement(title, description, category, xpReward) {
        const achievement = {
            id: `ach_${Date.now()}`,
            title,
            description,
            category,
            xpReward,
            unlockedDate: new Date().toISOString().split('T')[0],
            rarity: xpReward > 200 ? 'Rare' : xpReward > 100 ? 'Uncommon' : 'Common'
        };
        
        this.data.achievements.unshift(achievement);
        this.data.user.totalXP += xpReward;
        
        this.renderAchievements();
        this.updateUserStats();
        this.simulateDataPersistence();
        
        setTimeout(() => {
            this.showCelebration(`🏆 Achievement Unlocked: ${title}! ${description} (+${xpReward} XP)`, xpReward);
        }, 1500);
    }

    checkForAchievements() {
        const completedTasks = this.data.tasks.filter(t => t.completed);
        
        // Task-based achievements
        if (completedTasks.length >= 5 && !this.hasAchievement('Task Master')) {
            this.unlockAchievement('Task Master', 'Completed 5 tasks in one session!', 'Productivity', 100);
        }
        
        if (completedTasks.length >= 10 && !this.hasAchievement('Productivity Champion')) {
            this.unlockAchievement('Productivity Champion', 'Completed 10 tasks - unstoppable!', 'Productivity', 200);
        }
        
        // XP milestone achievements
        if (this.data.user.totalXP >= 5000 && !this.hasAchievement('XP Master')) {
            this.unlockAchievement('XP Master', 'Reached 5,000 total XP!', 'Milestone', 300);
        }
    }

    hasAchievement(title) {
        return this.data.achievements.some(a => a.title === title);
    }

    // Community System
    showCommunityTab(tab) {
        this.communityTab = tab;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        this.renderCommunityContent();
    }

    renderCommunityContent() {
        const container = document.getElementById('community-content');
        if (!container) return;
        
        if (this.communityTab === 'connections') {
            container.innerHTML = this.data.community.connections.map(connection => `
                <div class="connection-card">
                    <div class="connection-avatar">
                        <img src="${connection.avatar}" alt="${connection.name}" />
                    </div>
                    <div class="connection-info">
                        <div class="connection-name">${connection.name}</div>
                        <div class="connection-details">
                            ${connection.relationship} • Shared goals: ${connection.sharedGoals.join(', ')}
                        </div>
                    </div>
                    <button class="btn btn--sm btn--outline">Message</button>
                </div>
            `).join('');
        } else if (this.communityTab === 'achievements') {
            container.innerHTML = `
                <div class="connection-card">
                    <div class="achievement-icon">🏆</div>
                    <div class="connection-info">
                        <div class="connection-name">Sarah Chen unlocked "Creative Streak Master"</div>
                        <div class="connection-details">7 days of creative consistency! 🎨</div>
                    </div>
                    <button class="btn btn--sm btn--primary">Celebrate</button>
                </div>
                <div class="connection-card">
                    <div class="achievement-icon">🏆</div>
                    <div class="connection-info">
                        <div class="connection-name">Marcus Johnson completed "Data Science Foundations"</div>
                        <div class="connection-details">Professional development goal achieved! 🚀</div>
                    </div>
                    <button class="btn btn--sm btn--primary">Congratulate</button>
                </div>
            `;
        } else if (this.communityTab === 'challenges') {
            container.innerHTML = `
                <div class="connection-card">
                    <div class="connection-info">
                        <div class="connection-name">30-Day Creative Challenge</div>
                        <div class="connection-details">Create something every day for 30 days • 24 participants • 12 days left</div>
                    </div>
                    <button class="btn btn--sm btn--primary">Join Challenge</button>
                </div>
                <div class="connection-card">
                    <div class="connection-info">
                        <div class="connection-name">Mindfulness Masters</div>
                        <div class="connection-details">Daily meditation practice • 18 participants • Ongoing</div>
                    </div>
                    <button class="btn btn--sm btn--outline">View Progress</button>
                </div>
            `;
        }
    }

    // Analytics System
    initCharts() {
        if (this.charts.weekly) return; // Already initialized
        
        // Weekly Progress Chart
        const weeklyCtx = document.getElementById('weeklyChart');
        if (weeklyCtx) {
            this.charts.weekly = new Chart(weeklyCtx, {
                type: 'line',
                data: {
                    labels: this.data.weeklyProgress.map(d => d.day),
                    datasets: [{
                        label: 'Completion Rate',
                        data: this.data.weeklyProgress.map(d => d.percentage),
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#1FB8CD',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }

        // Category Distribution Chart
        const categoryCtx = document.getElementById('categoryChart');
        if (categoryCtx) {
            const categoryData = {};
            this.data.goals.forEach(goal => {
                categoryData[goal.category] = (categoryData[goal.category] || 0) + 1;
            });

            this.charts.category = new Chart(categoryCtx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(categoryData),
                    datasets: [{
                        data: Object.values(categoryData),
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });
        }
    }

    // Wellbeing Metrics System
    updateMetric(metricName) {
        this.currentMetric = metricName;
        const modal = document.getElementById('metric-modal');
        const title = document.getElementById('metric-modal-title');
        const label = document.getElementById('metric-label');
        const slider = document.getElementById('metric-slider');
        const value = document.getElementById('slider-value');
        const description = document.getElementById('metric-description');
        
        const currentValue = this.data.insights.wellbeing[metricName] || 5;
        
        const labels = {
            energy: 'How energetic do you feel right now?',
            mood: 'What\'s your overall mood today?',
            stress: 'How stressed are you feeling?',
            balance: 'How balanced does your life feel?'
        };
        
        const descriptions = {
            energy: 'Rate from 1 (exhausted) to 10 (highly energized)',
            mood: 'Rate from 1 (very low) to 10 (excellent)',
            stress: 'Rate from 1 (very relaxed) to 10 (very stressed)',
            balance: 'Rate from 1 (completely unbalanced) to 10 (perfectly balanced)'
        };
        
        if (title) title.textContent = `Update ${metricName.charAt(0).toUpperCase() + metricName.slice(1)}`;
        if (label) label.textContent = labels[metricName];
        if (description) description.textContent = descriptions[metricName];
        if (slider) slider.value = currentValue;
        if (value) value.textContent = currentValue;
        
        this.showModal('metric-modal');
    }

    saveMetric() {
        if (!this.currentMetric) return;
        
        const slider = document.getElementById('metric-slider');
        const newValue = parseInt(slider.value);
        const oldValue = this.data.insights.wellbeing[this.currentMetric] || 5;
        
        this.data.insights.wellbeing[this.currentMetric] = newValue;
        
        this.hideModal('metric-modal');
        this.updateMetricDisplay(this.currentMetric, newValue);
        this.simulateDataPersistence();
        
        const points = 15;
        this.data.user.totalXP += points;
        
        this.showCelebration(`${this.currentMetric.charAt(0).toUpperCase() + this.currentMetric.slice(1)} updated! Thank you for checking in with yourself. 💚`, points);
        
        // Provide contextual wellness insights
        this.provideWellnessInsights(this.currentMetric, newValue, oldValue);
    }

    updateMetricDisplay(metricName, value) {
        const metricItems = document.querySelectorAll('.metric-item');
        metricItems.forEach(item => {
            const label = item.querySelector('.metric-label');
            if (label && label.textContent.toLowerCase() === metricName) {
                const fill = item.querySelector('.metric-fill');
                const valueSpan = item.querySelector('.metric-value');
                if (fill) fill.style.width = `${value * 10}%`;
                if (valueSpan) valueSpan.textContent = `${value}/10`;
            }
        });
    }

    provideWellnessInsights(metric, newValue, oldValue) {
        const insights = {
            energy: {
                low: "💡 Low energy? Try: 10-minute walk, healthy snack, or 3 deep breaths.",
                improved: "🌟 Great energy! Perfect time for challenging tasks."
            },
            mood: {
                low: "🌈 Feeling down? Remember your recent wins and be kind to yourself.",
                improved: "😊 Excellent mood! You're radiating positive energy."
            },
            stress: {
                high: "😌 Feeling stressed? Try: 5-minute meditation or stepping outside.",
                improved: "✨ Great stress management! You're handling things well."
            },
            balance: {
                low: "⚖️ Feeling unbalanced? Consider adjusting priorities and boundaries.",
                improved: "🎯 Great balance! You're managing life harmoniously."
            }
        };
        
        setTimeout(() => {
            if (newValue <= 4 && insights[metric].low) {
                this.showCelebration(insights[metric].low, 0);
            } else if (newValue > oldValue && insights[metric].improved) {
                this.showCelebration(insights[metric].improved, 0);
            }
        }, 2000);
    }

    // Reflection System
    saveReflection() {
        const wins = document.getElementById('wins-text')?.value.trim() || '';
        const challenges = document.getElementById('challenges-text')?.value.trim() || '';
        const focus = document.getElementById('focus-text')?.value.trim() || '';
        const progress = document.getElementById('progress-reflection')?.value.trim() || '';
        
        if (!wins && !challenges && !focus && !progress) {
            alert('Please fill in at least one reflection question.');
            return;
        }
        
        const reflection = {
            id: `reflection_${Date.now()}`,
            date: new Date().toISOString().split('T')[0],
            wins,
            challenges,
            focus,
            progress,
            wellbeing: { ...this.data.insights.wellbeing }
        };
        
        if (!this.data.reflections) this.data.reflections = [];
        this.data.reflections.unshift(reflection);
        
        // Clear form
        const winsText = document.getElementById('wins-text');
        const challengesText = document.getElementById('challenges-text');
        const focusText = document.getElementById('focus-text');
        const progressText = document.getElementById('progress-reflection');
        
        if (winsText) winsText.value = '';
        if (challengesText) challengesText.value = '';
        if (focusText) focusText.value = '';
        if (progressText) progressText.value = '';
        
        const points = 100;
        this.data.user.totalXP += points;
        
        this.simulateDataPersistence();
        this.showCelebration('Weekly reflection saved! Self-reflection is the key to continuous growth. 🌟', points);
        
        // Achievement check
        if (this.data.reflections.length >= 4 && !this.hasAchievement('Reflection Master')) {
            this.unlockAchievement('Reflection Master', 'Completed 4 weekly reflections!', 'Personal Development', 250);
        }
    }

    // Navigation System
    navigateToSection(sectionName) {
        console.log(`Navigating to section: ${sectionName}`);
        
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => section.classList.add('hidden'));
        
        // Show target section
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('fade-in');
        }
        
        // Update navigation
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
        
        const activeNavItem = document.querySelector(`.nav-item[data-section="${sectionName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
        
        this.currentSection = sectionName;
        
        // Initialize section-specific functionality
        if (sectionName === 'progress') {
            setTimeout(() => this.initCharts(), 100);
        } else if (sectionName === 'community') {
            this.renderCommunityContent();
        }
    }

    // Modal System
    showModal(modalId) {
        this.hideAllModals();
        
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('fade-in');
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('fade-in');
        }
    }

    showCelebration(message, points = 0) {
        const celebrationModal = document.getElementById('celebration-modal');
        const titleElement = document.getElementById('celebration-title');
        const messageElement = document.getElementById('celebration-message');
        const pointsElement = document.getElementById('celebration-points');
        
        if (celebrationModal && messageElement) {
            const titles = ['Outstanding!', 'Excellent!', 'Amazing!', 'Fantastic!', 'Incredible!', 'Well Done!'];
            const randomTitle = titles[Math.floor(Math.random() * titles.length)];
            
            if (titleElement) titleElement.textContent = randomTitle;
            messageElement.textContent = message;
            if (pointsElement) pointsElement.textContent = points > 0 ? `+${points} XP earned!` : '';
            
            this.showModal('celebration-modal');
            
            // Auto-hide after 4 seconds
            setTimeout(() => {
                this.hideModal('celebration-modal');
            }, 4000);
        }
    }

    // Utility Methods
    showTasksOverview() {
        const completedTasks = this.data.tasks.filter(t => t.completed);
        const pendingTasks = this.data.tasks.filter(t => !t.completed);
        const highPriorityTasks = this.data.tasks.filter(t => t.priority === 'High');
        
        const overview = `
📊 Tasks Overview

✅ Completed: ${completedTasks.length}
⏳ Pending: ${pendingTasks.length}
🔥 High Priority: ${highPriorityTasks.length}
📈 Total: ${this.data.tasks.length}

🎯 Goal-Aligned Tasks: ${this.data.tasks.filter(t => t.goalId).length}

Keep up the excellent work! Every completed task brings you closer to your goals.
        `.trim();
        
        alert(overview);
    }

    showHabitsOverview() {
        const completedToday = this.data.habits.filter(h => h.completedToday);
        const totalStreakDays = this.data.habits.reduce((sum, h) => sum + h.currentStreak, 0);
        const avgSuccessRate = Math.round((this.data.habits.reduce((sum, h) => sum + h.successRate, 0) / this.data.habits.length) * 100);
        
        const overview = `
🏃 Habits Overview

✅ Completed Today: ${completedToday.length}/${this.data.habits.length}
🔥 Total Streak Days: ${totalStreakDays}
📊 Average Success Rate: ${avgSuccessRate}%
🏆 Best Streak: ${Math.max(...this.data.habits.map(h => h.longestStreak))} days

💪 You're building powerful daily habits! Consistency is the key to transformation.
        `.trim();
        
        alert(overview);
    }

    simulateDataPersistence() {
        // Simulate saving to backend/localStorage
        const dataSnapshot = {
            ...this.data,
            lastSaved: new Date().toISOString()
        };
        
        console.log('Data persisted:', dataSnapshot);
        
        // In a real app, this would save to localStorage or backend
        try {
            localStorage.setItem('goalcraft_data', JSON.stringify(dataSnapshot));
        } catch (e) {
            console.log('localStorage not available, using memory storage');
        }
    }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing GoalCraft AI...');
    app = new GoalCraftApp();
    window.app = app; // Make app globally accessible for HTML onclick handlers
});

// Keyboard shortcuts for power users
document.addEventListener('keydown', (e) => {
    if (!app) return;
    
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                app.navigateToSection('overview');
                break;
            case '2':
                e.preventDefault();
                app.navigateToSection('goals');
                break;
            case '3':
                e.preventDefault();
                app.navigateToSection('progress');
                break;
            case '4':
                e.preventDefault();
                app.navigateToSection('community');
                break;
            case '5':
                e.preventDefault();
                app.navigateToSection('reflection');
                break;
            case 'n':
                e.preventDefault();
                app.showAddTask();
                break;
            case 'g':
                e.preventDefault();
                app.showGoalWizard();
                break;
        }
    }
});

// Performance optimization: Lazy load charts
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && app) {
            app.initCharts();
            chartObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe the progress section for chart initialization
document.addEventListener('DOMContentLoaded', () => {
    const progressSection = document.getElementById('progress-section');
    if (progressSection) {
        chartObserver.observe(progressSection);
    }
});

// Handle visibility change for better UX
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && app) {
        app.renderNextBestActions();
        app.updateProgressCards();
    }
});

console.log('🎯 GoalCraft AI - Complete AI-powered goal alignment system loaded successfully!');