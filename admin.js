// ==========================================
// Axel44 Agency - Admin JavaScript
// ==========================================

// ==========================================
// Admin Login Functionality
// ==========================================

const adminLoginForm = document.getElementById('adminLoginForm');

if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;

        // Demo credentials
        if (username === 'admin' && password === 'password') {
            // Store login session in localStorage
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminUsername', username);
            
            // Redirect to dashboard
            window.location.href = 'admin-dashboard.html';
        } else {
            // Show error
            alert('Invalid credentials. Please use:\nUsername: admin\nPassword: password');
            document.getElementById('adminUsername').value = '';
            document.getElementById('adminPassword').value = '';
        }
    });
}

// ==========================================
// Admin Dashboard - Check Session
// ==========================================

function checkAdminSession() {
    if (document.querySelector('.dashboard-wrapper')) {
        const isLoggedIn = localStorage.getItem('adminLoggedIn');
        
        if (!isLoggedIn) {
            // Redirect to login if not authenticated
            window.location.href = 'admin-login.html';
            return;
        }

        const username = localStorage.getItem('adminUsername') || 'alx';
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome, ${username}!`;
        }
    }
}

checkAdminSession();

// ==========================================
// Auto-Updating Date and Time
// ==========================================

function updateDateTime() {
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');

    if (currentDateElement || currentTimeElement) {
        const now = new Date();

        // Format date
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', dateOptions);

        // Format time
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

        if (currentDateElement) {
            currentDateElement.textContent = formattedDate;
        }
        if (currentTimeElement) {
            currentTimeElement.textContent = formattedTime;
        }
    }
}

// Update date/time immediately
updateDateTime();

// Update date/time every second
setInterval(updateDateTime, 1000);

// ==========================================
// Logout Functionality
// ==========================================

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            // Clear session
            localStorage.removeItem('adminLoggedIn');
            localStorage.removeItem('adminUsername');
            
            // Redirect to login
            window.location.href = 'admin-login.html';
        }
    });
}

// ==========================================
// Sidebar Navigation
// ==========================================

const sidebarNavItems = document.querySelectorAll('.sidebar-nav .nav-item');
sidebarNavItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        sidebarNavItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
    });
});

// Set dashboard as active on page load
const dashboardLink = document.querySelector('a[href="#dashboard"]');
if (dashboardLink) {
    dashboardLink.classList.add('active');
}

// ==========================================
// Quick Action Buttons
// ==========================================

const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const actionText = this.textContent.trim();
        alert(`Feature: ${actionText}\n\nThis section would be fully implemented in a production environment.`);
    });
});

// ==========================================
// Dashboard Stats Animation
// ==========================================

const statCards = document.querySelectorAll('.stat-card');
statCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add animations if not already present
if (!document.getElementById('admin-animations-style')) {
    const style = document.createElement('style');
    style.id = 'admin-animations-style';
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// Dashboard Cards Hover Effects
// ==========================================

const dashboardCards = document.querySelectorAll('.dashboard-card');
dashboardCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==========================================
// Console Welcome Message
// ==========================================

if (document.querySelector('.dashboard-wrapper')) {
    console.log('%c🔐 Admin Dashboard Loaded', 'font-size: 18px; color: #00d4ff; font-weight: bold;');
    console.log('%cAxel44 Agency Admin Portal', 'font-size: 14px; color: #ff6b9d;');
    console.log('%cSession is secure and auto-updated.', 'color: #ffd700;');
}

// ==========================================
// Session Timeout Warning (Optional)
// ==========================================

let sessionTimeout = 30 * 60 * 1000; // 30 minutes
let sessionWarningTimeout;
let logoutTimeout;

function resetSessionTimeout() {
    clearTimeout(sessionWarningTimeout);
    clearTimeout(logoutTimeout);

    sessionWarningTimeout = setTimeout(() => {
        console.warn('Session will expire in 5 minutes due to inactivity');
    }, (sessionTimeout - 5 * 60 * 1000));

    logoutTimeout = setTimeout(() => {
        alert('Your session has expired due to inactivity.');
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminUsername');
        window.location.href = 'admin-login.html';
    }, sessionTimeout);
}

// Reset timeout on user activity
document.addEventListener('click', resetSessionTimeout);
document.addEventListener('keypress', resetSessionTimeout);

// Initialize session timeout
if (document.querySelector('.dashboard-wrapper')) {
    resetSessionTimeout();
}

// ==========================================
// Keyboard Shortcuts
// ==========================================

document.addEventListener('keydown', function(e) {
    // Alt + L to logout
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        if (logoutBtn) {
            logoutBtn.click();
        }
    }

    // Alt + D to go to dashboard
    if (e.altKey && e.key === 'd') {
        e.preventDefault();
        if (dashboardLink) {
            dashboardLink.click();
        }
    }
});

// Log keyboard shortcuts
if (document.querySelector('.dashboard-wrapper')) {
    console.log('%cKeyboard Shortcuts:', 'font-weight: bold; color: #00d4ff;');
    console.log('Alt + L - Logout');
    console.log('Alt + D - Go to Dashboard');
}
