// --- ICON LIBRARY (SVG) ---
const ICONS = {
    home: '<svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    stats: '<svg class="icon icon-lg" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    tools: '<svg class="icon icon-lg" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    note: '<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
    check: '<svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    x: '<svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    trash: '<svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
    undo: '<svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>',
    close: '<svg class="icon icon-lg" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    chart: '<svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>',
    list: '<svg class="icon icon-lg" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>',
    graph: '<svg class="icon icon-lg" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    calendar: '<svg class="icon icon-lg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    db: '<svg class="icon icon-lg" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    task: '<svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    slot: '<svg class="icon icon-lg" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
    gear: '<svg class="icon icon-lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    crystal: '<svg class="icon icon-lg" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path d="M12 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path><path d="M12 6a4 4 0 0 0-4 4"></path><path d="M8 18h8"></path><path d="M10 22h4"></path></svg>'
};

document.getElementById('navHome').innerHTML = ICONS.home;
document.getElementById('navStats').innerHTML = ICONS.stats;
document.getElementById('navTools').innerHTML = ICONS.tools;
document.querySelectorAll('.icon-slot').forEach(e => e.innerHTML = ICONS.slot);
document.querySelectorAll('.icon-task').forEach(e => e.innerHTML = ICONS.task);
document.querySelectorAll('.icon-chart').forEach(e => e.innerHTML = ICONS.chart);
document.querySelectorAll('.icon-list').forEach(e => e.innerHTML = ICONS.list);
document.querySelectorAll('.icon-graph').forEach(e => e.innerHTML = ICONS.graph);
document.querySelectorAll('.icon-calendar').forEach(e => e.innerHTML = ICONS.calendar);
document.querySelectorAll('.icon-undo').forEach(e => e.innerHTML = ICONS.undo);
document.querySelectorAll('.icon-db').forEach(e => e.innerHTML = ICONS.db);
document.querySelectorAll('.icon-close').forEach(e => e.innerHTML = ICONS.close);
document.querySelectorAll('.icon-gear').forEach(e => e.innerHTML = ICONS.gear);
document.querySelectorAll('.icon-crystal').forEach(e => e.innerHTML = ICONS.crystal);

// --- FIREBASE SETUP ---
const firebaseConfig = { apiKey: "AIzaSyD_3PoAWTKc9yrNuW37MFBg2nhtFV3v4xM", authDomain: "attendancepro-f5017.firebaseapp.com", projectId: "attendancepro-f5017", storageBucket: "attendancepro-f5017.firebasestorage.app", messagingSenderId: "116879034772", appId: "1:116879034772:web:f20c9dc9dad7e7a2796781", measurementId: "G-Z3H01YF20Z" };
let auth, db, currentUser;
try { firebase.initializeApp(firebaseConfig); auth = firebase.auth(); db = firebase.firestore(); 
    auth.onAuthStateChanged(user => { currentUser = user; const loginDiv = document.getElementById("cloudLoggedOut"); const statusDiv = document.getElementById("cloudLoggedIn"); if (user) { loginDiv.style.display = "none"; statusDiv.style.display = "block"; document.getElementById("userName").innerText = user.displayName || "User"; if(user.photoURL) document.getElementById("userAvatar").innerHTML = `<img src="${user.photoURL}">`; checkForCloudUpdates(); } else { loginDiv.style.display = "block"; statusDiv.style.display = "none"; } });
} catch(e) { console.error("Firebase init error:", e); }

function loginWithGoogle() { if(!auth) return showToast("Firebase not init", "error"); const provider = new firebase.auth.GoogleAuthProvider(); auth.signInWithPopup(provider).then(() => showToast("Logged In")).catch(e => showToast(e.message, "error")); }
function logout() { auth.signOut().then(() => showToast("Logged Out")); }
function forceCloudSync() { if(!currentUser || !db) return; const updateStatus = document.getElementById("syncStatus"); updateStatus.innerText = "Checking..."; db.collection("users").doc(currentUser.uid).get().then(doc => { const localTime = parseInt(localStorage.getItem("last_sync_time") || "0"); if(doc.exists && doc.data().lastUpdated > localTime) { showConfirm("Sync Conflict", "Cloud data is newer than your current data. Overwrite cloud data anyway?", () => { pushToCloud(updateStatus); }); } else { pushToCloud(updateStatus); } }).catch(e => { console.error(e); pushToCloud(updateStatus); }); }
function pushToCloud(updateStatus) { updateStatus.innerText = "Syncing..."; const payload = { attendance: data, settings: { target: MIN_ATTENDANCE, semStart: localStorage.getItem("sem_start_date") || "", timetable: timetable }, lastUpdated: Date.now() }; db.collection("users").doc(currentUser.uid).set(payload, { merge: true }).then(() => { updateStatus.innerText = "Synced securely just now"; localStorage.setItem("last_sync_time", payload.lastUpdated); setTimeout(() => updateStatus.innerText = "Synced securely", 2000); }).catch(e => { console.error(e); updateStatus.innerText = "Sync Failed"; }); }
function syncToCloud() { if(!currentUser || !db) return; pushToCloud(document.getElementById("syncStatus")); }
function checkForCloudUpdates() { if(!currentUser || !db) return; db.collection("users").doc(currentUser.uid).get().then(doc => { if(doc.exists) { const cloudData = doc.data(); const localTime = parseInt(localStorage.getItem("last_sync_time") || "0"); if(cloudData.lastUpdated > localTime + 1000) { showConfirm("Cloud Data Found", "Newer data found on cloud. Restore?", () => { if(cloudData.attendance) data = cloudData.attendance; if(cloudData.settings) { if(cloudData.settings.target) { MIN_ATTENDANCE = cloudData.settings.target; localStorage.setItem("target_percent", MIN_ATTENDANCE); } if(cloudData.settings.semStart) localStorage.setItem("sem_start_date", cloudData.settings.semStart); if(cloudData.settings.timetable) { timetable = cloudData.settings.timetable; localStorage.setItem("custom_timetable", JSON.stringify(timetable)); } } save(false); localStorage.setItem("last_sync_time", cloudData.lastUpdated); render(); showToast("Restored from Cloud"); }); } } }); }

// --- CUSTOM DROPDOWN ENGINE ---
function setupCustomSelects() {
    document.querySelectorAll('.custom-select-source').forEach(select => {
        if (select.parentNode.classList.contains('custom-select-wrapper')) return;
        const wrapper = document.createElement('div'); wrapper.className = 'custom-select-wrapper';
        const trigger = document.createElement('div'); trigger.className = 'custom-select-trigger'; trigger.innerHTML = `<span>${select.options[select.selectedIndex]?.text || 'Select...'}</span>`;
        const optionsDiv = document.createElement('div'); optionsDiv.className = 'custom-options';
        Array.from(select.options).forEach(opt => {
            const optionDiv = document.createElement('div'); optionDiv.className = 'custom-option' + (opt.selected ? ' selected' : ''); optionDiv.innerText = opt.text; optionDiv.setAttribute('data-value', opt.value);
            optionDiv.addEventListener('click', function(e) { e.stopPropagation(); select.value = this.getAttribute('data-value'); trigger.innerHTML = `<span>${this.innerText}</span>`; wrapper.classList.remove('open'); select.dispatchEvent(new Event('change')); optionsDiv.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected')); this.classList.add('selected'); });
            optionsDiv.appendChild(optionDiv);
        });
        trigger.addEventListener('click', function(e) { e.stopPropagation(); document.querySelectorAll('.custom-select-wrapper.open').forEach(el => { if(el !== wrapper) el.classList.remove('open'); }); wrapper.classList.toggle('open'); });
        select.parentNode.insertBefore(wrapper, select.nextSibling); wrapper.appendChild(select); wrapper.appendChild(trigger); wrapper.appendChild(optionsDiv);
    });
    document.addEventListener('click', function() { document.querySelectorAll('.custom-select-wrapper.open').forEach(el => el.classList.remove('open')); });
}

// --- UI UTILS ---
function showToast(msg, type = 'success') { const box = document.getElementById('toastBox'); const toast = document.createElement('div'); toast.className = `toast ${type}`; const icon = type === 'success' ? ICONS.check : ICONS.x; toast.innerHTML = `<span class="icon-sm" style="color: ${type === 'success' ? 'var(--green)' : 'var(--red)'}">${icon}</span> ${msg}`; box.appendChild(toast); setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(-20px) scale(0.9)'; setTimeout(() => toast.remove(), 300); }, 3000); }
function showConfirm(title, desc, onConfirm) { const modal = document.getElementById('confirmModal'); document.getElementById('confirmTitle').innerText = title; document.getElementById('confirmDesc').innerText = desc; modal.style.display = "flex"; const confirmBtn = document.getElementById('confirmYesBtn'); confirmBtn.onclick = () => { onConfirm(); closeConfirm(); }; }
function closeConfirm() { document.getElementById('confirmModal').style.display = "none"; }
function closePasswordModal() { document.getElementById('passwordModal').style.display = "none"; }

// --- LOGIC ---
let USER_PIN = localStorage.getItem("user_pin") || "0000";
let MIN_ATTENDANCE = parseInt(localStorage.getItem("target_percent")) || 75;
const defaultTimetable = { Monday: [ ["11:00-12:00","Introduction to Cyber Law"], ["12:00-01:00","Artificial Intelligence"], ["01:30-03:30","Operating Systems Lab"], ["03:30-04:30","Operating Systems"], ["04:30-05:30","Entrepreneurship and Start-ups"] ], Tuesday: [ ["11:00-12:00","Introduction to Cyber Law"], ["12:00-01:00","Theory of Computation"], ["01:30-03:30","Artificial Intelligence Lab"], ["03:30-04:30","Operating Systems"], ["04:30-05:30","Business Communication"] ], Wednesday: [ ["11:00-01:00","Computer Skill Lab-1"], ["01:30-02:30","Theory of Computation"], ["02:30-03:30","Introduction to Cyber Law"], ["03:30-04:30","Artificial Intelligence"], ["04:30-05:30","Business Communication"] ], Thursday: [ ["11:00-12:00","Software Requirement Engineering"], ["12:00-01:00","Theory of Computation"], ["01:30-02:30","Operating Systems"], ["02:30-03:30","Artificial Intelligence"], ["03:30-04:30","Entrepreneurship and Start-ups"] ], Friday: [ ["11:00-01:00","Software Requirement Engineering"], ["01:30-02:30","Theory of Computation"], ["02:30-04:30","Report Writing & Presentation Skill"] ] };
if ("serviceWorker" in navigator) { navigator.serviceWorker.register("./sw.js").then(reg => { reg.addEventListener('updatefound', () => { const newWorker = reg.installing; newWorker.addEventListener('statechange', () => { if (newWorker.state === 'installed' && navigator.serviceWorker.controller) { showConfirm("Update Available", "A new version of the app is ready.", () => window.location.reload()); } }); }); }); }

function getStorageDateKey(date) { const y = date.getFullYear(); const m = String(date.getMonth() + 1).padStart(2, '0'); const d = String(date.getDate()).padStart(2, '0'); return `${y}-${m}-${d}`; }
const today = new Date();
const day = today.toLocaleDateString("en-US",{ weekday:"long" });
const dateKey = getStorageDateKey(today);

let data = JSON.parse(localStorage.getItem("attendance")) || { totals:{}, history:{}, locks:{}, tasks:[], holidays:[] };
if(!data.tasks) data.tasks = [];
if(!data.holidays) data.holidays = [];
let timetable = JSON.parse(localStorage.getItem("custom_timetable")) || JSON.parse(JSON.stringify(defaultTimetable));

function save(triggerSync = true){ localStorage.setItem("attendance",JSON.stringify(data)); if(triggerSync) { localStorage.setItem("last_sync_time", Date.now()); syncToCloud(); } }

function switchTab(tabId) { document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active')); document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active')); document.getElementById('tab-' + tabId).classList.add('active'); const btns = document.querySelectorAll('.nav-item'); if(tabId === 'home') btns[0].classList.add('active'); if(tabId === 'stats') btns[1].classList.add('active'); if(tabId === 'tools') btns[2].classList.add('active'); if(tabId === 'stats') renderCalendar(); window.scrollTo({top: 0, behavior: 'smooth'}); }
function requestNotificationPermission() { if (!("Notification" in window)) { showToast("Not supported", "error"); return; } Notification.requestPermission().then((permission) => { if (permission === "granted") { showToast("Notifications Enabled!"); sendNotification("Setup Complete", "You will be reminded at 5 PM."); } else { showToast("Permission Denied", "error"); } }); }
function sendNotification(title, body) { if (Notification.permission === "granted") { if(navigator.serviceWorker.controller){ navigator.serviceWorker.ready.then(reg => reg.showNotification(title, { body: body, icon: 'icon.png' })); } else { new Notification(title, { body: body, icon: 'icon.png' }); } } }
function startBackgroundCheck() { setInterval(() => { const now = new Date(); if(now.getHours() === 17 && now.getMinutes() === 0) { const d = now.toLocaleDateString("en-US",{ weekday:"long" }); if(d === "Saturday" || d === "Sunday") return; if(getHolidayForDate(dateKey)) return; const todaysLocks = Object.keys(data.locks).some(k => k.startsWith(dateKey)); if(!todaysLocks) { sendNotification("Attendance Reminder", "You haven't marked your attendance today!"); document.getElementById("reminderAlert").style.display = "block"; } } }, 60000); }
startBackgroundCheck();

// --- HOLIDAY LOGIC UPGRADED ---
function getHolidayForDate(dateStr) {
    if(!data.holidays) return null;
    const target = new Date(dateStr);
    return data.holidays.find(h => {
        const start = new Date(h.start);
        const end = new Date(h.end);
        return target >= start && target <= end;
    });
}

let currentSetCalDate = new Date();
let selectedEventDate = "";
let selectedEventType = "festival";
let editingHolidayId = null; 

function changeSetCalMonth(delta) { currentSetCalDate.setMonth(currentSetCalDate.getMonth() + delta); renderSettingsCalendar(); }
function renderSettingsCalendar() {
    const grid = document.getElementById('settingsCalGrid'); grid.innerHTML = ""; const year = currentSetCalDate.getFullYear(); const month = currentSetCalDate.getMonth();
    document.getElementById('setCalMonthYear').innerText = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    const firstDay = new Date(year, month, 1).getDay() || 7; const daysInMonth = new Date(year, month + 1, 0).getDate();
    for(let i=1; i<firstDay; i++) grid.innerHTML += `<div></div>`;
    for(let d=1; d<=daysInMonth; d++) {
        const dStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`; const holiday = getHolidayForDate(dStr); let dotClass = "";
        if(holiday) { if(holiday.type === 'exam') dotClass = "orange"; else if(holiday.type === 'off') dotClass = "green"; else dotClass = "purple"; }
        const dotHTML = dotClass ? `<div class="dot ${dotClass}"></div>` : ''; grid.innerHTML += `<div class="cal-day" onclick="openEventModal('${dStr}')">${d}${dotHTML}</div>`;
    }
}

function openEventModal(dateStr) {
    selectedEventDate = dateStr; const holiday = getHolidayForDate(dateStr); document.getElementById('eventModal').style.display = "flex";
    const startDateInput = document.getElementById('eventStartDateInput'); const endDateInput = document.getElementById('eventEndDateInput');
    startDateInput.value = dateStr; editingHolidayId = null;
    if(holiday) { document.getElementById('eventNameInput').value = holiday.name; endDateInput.value = holiday.end; setEventType(holiday.type || 'festival'); editingHolidayId = holiday.id; } 
    else { document.getElementById('eventNameInput').value = ""; endDateInput.value = dateStr; setEventType('festival'); }
}
function setEventType(type) {
    selectedEventType = type;
    document.getElementById('typeFestival').className = 'btn-pill btn-secondary'; document.getElementById('typeExam').className = 'btn-pill btn-secondary'; document.getElementById('typeOff').className = 'btn-pill btn-secondary';
    document.getElementById('typeFestival').style.background = ""; document.getElementById('typeFestival').style.color = "";
    document.getElementById('typeExam').style.background = ""; document.getElementById('typeExam').style.color = "";
    if(type === 'festival') { document.getElementById('typeFestival').className = 'btn-pill present'; document.getElementById('typeFestival').style.background = "rgba(139, 92, 246, 0.15)"; document.getElementById('typeFestival').style.color = "#a78bfa"; }
    if(type === 'exam') { document.getElementById('typeExam').className = 'btn-pill absent'; document.getElementById('typeExam').style.background = "rgba(245, 158, 11, 0.15)"; document.getElementById('typeExam').style.color = "#fbbf24"; }
    if(type === 'off') { document.getElementById('typeOff').className = 'btn-pill cancelled'; }
}
function closeEventModal() { document.getElementById('eventModal').style.display = "none"; }
function saveEvent() {
    const name = document.getElementById('eventNameInput').value.trim(); const endDate = document.getElementById('eventEndDateInput').value;
    if(!name) return showToast("Enter Name", "error"); if(!endDate) return showToast("End date required", "error"); if(endDate < selectedEventDate) return showToast("End date cannot be before start", "error");
    if(editingHolidayId) { data.holidays = data.holidays.filter(h => h.id !== editingHolidayId); } else { data.holidays = data.holidays.filter(h => h.start !== selectedEventDate); }
    data.holidays.push({ id: Date.now(), name: name, start: selectedEventDate, end: endDate, type: selectedEventType });
    save(); renderSettingsCalendar(); renderHolidays(); closeEventModal(); showToast("Event Saved");
}
function deleteHoliday(id) { data.holidays = data.holidays.filter(h => h.id !== id); save(); renderSettingsCalendar(); renderHolidays(); }
function renderHolidays() {
    const list = document.getElementById("holidayList"); list.innerHTML = "";
    if(!data.holidays || data.holidays.length === 0) { list.innerHTML = "<div style='font-size:13px; color:var(--text-muted); text-align:center;'>No events added</div>"; return; }
    data.holidays.sort((a,b) => new Date(a.start) - new Date(b.start)).forEach(h => {
        let typeBadge = "";
        if(h.type === 'exam') typeBadge = `<span class="badge-type badge-exam">EXAM</span>`; else if(h.type === 'off') typeBadge = `<span class="badge-type badge-off">OFF</span>`; else typeBadge = `<span class="badge-type badge-festival">HOLIDAY</span>`;
        let dateDisplay = formatDateDDMMYYYY(h.start); if(h.start !== h.end) { dateDisplay += ` - ${formatDateDDMMYYYY(h.end)}`; }
        list.innerHTML += `<div class="task-item" style="border-left: none; border-bottom: 1px solid var(--border-color); border-radius: 0; background: transparent; padding: 12px 0;"><div style="flex:1;"><div style="font-size:14px; font-weight:700; display:flex; align-items:center;">${typeBadge} ${h.name}</div><div style="font-size:12px; color:var(--text-muted); margin-top:6px; font-weight:500;">${dateDisplay}</div></div><button class="del-task-btn" onclick="deleteHoliday(${h.id})">${ICONS.trash}</button></div>`;
    });
}

function loadLectures(){
  const container = document.getElementById("lectures"); container.innerHTML = "";
  const activeHoliday = getHolidayForDate(dateKey);
  if (activeHoliday) {
      if(activeHoliday.type === 'exam') { container.innerHTML = `<div class="exam-card" style="border-color: rgba(245, 158, 11, 0.4);"><div class="weekend-icon">📝</div><div class="weekend-title">Exam Day</div><div style="font-size:18px; font-weight:800; color:#fbbf24; margin:10px 0;">${activeHoliday.name}</div><div style="font-size:14px; color:var(--text-muted);">Good luck! No attendance tracking today.</div></div>`; } 
      else { container.innerHTML = `<div class="holiday-card" style="border-color: rgba(139, 92, 246, 0.4);"><div class="weekend-icon">🎉</div><div class="weekend-title">${activeHoliday.name}</div><div style="font-size:14px; color:var(--text-muted);">No classes today. Enjoy!</div></div>`; }
      return;
  }
  (timetable[day] || []).forEach(([time,subject])=>{
    const lockKey = dateKey+"_"+subject+"_"+time; const locked = data.locks[lockKey]; const div = document.createElement("div"); div.className = "card lecture-card "+(locked?"locked":"");
    let statusHTML = "";
    if(locked && data.history[dateKey]){
      const entry = data.history[dateKey].find(h => h.subject === subject && h.time === time);
      if(entry){
        if(entry.status === "Present") div.classList.add("lecture-present"); if(entry.status === "Absent") div.classList.add("lecture-absent"); if(entry.status === "Cancelled") div.classList.add("lecture-cancelled");
        let icon = entry.status === "Present" ? ICONS.check : (entry.status === "Absent" ? ICONS.x : ICONS.close); let color = entry.status === "Present" ? "var(--green)" : (entry.status === "Absent" ? "var(--red)" : "var(--text-muted)");
        statusHTML = `<div style="font-size:13px; margin-top:8px; font-weight:700; display:flex; align-items:center; gap:6px; color:${color};"><span class="icon-sm" style="color:${color}">${icon}</span> Marked ${entry.status}</div>`;
      }
    }
    div.innerHTML = `<div class="lec-top"><span class="lec-time">${time}</span><div class="lec-subject">${subject}</div><button class="note-btn" onclick="event.stopPropagation(); addNote('${subject}')">${ICONS.note}</button></div>${statusHTML}<div class="action-row" style="display:${locked ? 'none' : 'flex'}"><button class="btn-pill present" onclick="markAttendance('${subject}', '${time}', 'Present')">Present</button><button class="btn-pill absent" onclick="markAttendance('${subject}', '${time}', 'Absent')">Absent</button><button class="btn-pill cancelled" onclick="markAttendance('${subject}', '${time}', 'Cancelled')">Off</button></div>`;
    container.appendChild(div);
  });
}

let currentNoteSubject = "";
function addNote(subject) { currentNoteSubject = subject; document.getElementById('noteSubjectDisplay').innerText = subject; document.getElementById('noteInput').value = ""; document.getElementById('noteModal').style.display = 'flex'; document.getElementById('noteInput').focus(); }
function closeNoteModal() { document.getElementById('noteModal').style.display = 'none'; }
document.getElementById('saveNoteBtn').onclick = function() { const text = document.getElementById('noteInput').value.trim(); if(text) { data.tasks.push({ id: Date.now(), text: text, subject: currentNoteSubject, date: dateKey, done: false }); save(); renderTasks(); showToast("Note Added"); closeNoteModal(); } else { showToast("Please enter text", "error"); } };

function renderTasks() {
    const container = document.getElementById("taskList"); const card = document.getElementById("taskCard"); container.innerHTML = ""; const activeTasks = data.tasks; 
    if(activeTasks.length === 0) { card.style.display = "none"; return; }
    card.style.display = "block";
    activeTasks.forEach((task, index) => { container.innerHTML += `<div class="task-item ${task.done ? 'task-done' : ''}" onclick="toggleTask(${index})"><div style="flex:1; margin-right:12px;"><div style="font-size:15px; font-weight:600; margin-bottom:4px; line-height:1.4;">${task.text}</div><div style="font-size:12px; font-weight:500; color:var(--text-muted);">${task.subject} • ${formatDateDDMMYYYY(task.date)}</div></div><button class="del-task-btn" onclick="deleteTask(event, ${index})">${ICONS.trash}</button></div>`; });
}
function toggleTask(index) { data.tasks[index].done = !data.tasks[index].done; save(); renderTasks(); }
function deleteTask(e, index) { e.stopPropagation(); showConfirm("Delete Note?", "This cannot be undone.", () => { data.tasks.splice(index, 1); save(); renderTasks(); }); }

function markAttendance(subject,time,status){ const key = dateKey+"_"+subject+"_"+time; if(data.locks[key]) return; data.locks[key] = true; data.history[dateKey] ??= []; data.history[dateKey].push({subject,time,status}); if(status !== "Cancelled"){ data.totals[subject] ??= {p:0,t:0}; data.totals[subject].t++; if(status==="Present") data.totals[subject].p++; } save(); render(); showToast(`Marked ${status}`); }
function markExtra(status){ const noExtraKey = dateKey + "_NO_EXTRA"; if(data.locks[noExtraKey]){ showToast("Locked for today", "error"); return; } const subject = document.getElementById("extraSubject").value; if(!subject) return; const key = dateKey+"_EXTRA_"+subject; if(data.locks[key]) return showToast("Already added", "error"); data.locks[key]=true; data.history[dateKey] ??= []; data.history[dateKey].push({subject,time:"Extra",status}); data.totals[subject] ??= {p:0,t:0}; data.totals[subject].t++; if(status==="Present") data.totals[subject].p++; save(); render(); showToast("Extra Class Added"); }

// --- CRYSTAL BALL LOGIC ---
let isPredictiveModeOn = false; let predictUntilDate = "";
function togglePredictiveMode() {
    isPredictiveModeOn = !isPredictiveModeOn; const btn = document.getElementById('crystalBallBtn'); const panel = document.getElementById('predictionPanel');
    if (isPredictiveModeOn) { btn.classList.add('active'); panel.classList.add('active'); const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1); const input = document.getElementById('predictUntilDateInput'); input.min = tomorrow.toISOString().split('T')[0]; const semEnd = localStorage.getItem("sem_end_date"); if (semEnd) input.max = semEnd; } 
    else { btn.classList.remove('active'); panel.classList.remove('active'); predictUntilDate = ""; document.getElementById('predictUntilDateInput').value = ""; renderSummary(); }
}
function applyPrediction() {
    const inputDate = document.getElementById('predictUntilDateInput').value; if (!inputDate) return showToast("Please select a date", "error"); const todayStr = new Date().toISOString().split('T')[0]; if (inputDate <= todayStr) return showToast("Date must be in the future", "error");
    predictUntilDate = inputDate; renderSummary(); showToast("Prediction Applied", "success");
}
function getPredictedAbsences() {
    if (!isPredictiveModeOn || !predictUntilDate) return {}; const endDate = new Date(predictUntilDate); const cursor = new Date(); cursor.setDate(cursor.getDate() + 1); const predicted = {};
    while (cursor <= endDate) { const dStr = getStorageDateKey(cursor); if (!getHolidayForDate(dStr)) { const dayName = cursor.toLocaleDateString("en-US", { weekday: "long" }); const lectures = timetable[dayName] || []; lectures.forEach(lec => { const sub = lec[1]; predicted[sub] = (predicted[sub] || 0) + 1; }); } cursor.setDate(cursor.getDate() + 1); }
    return predicted;
}
function getRemainingFutureSlots() {
    const semEndStr = localStorage.getItem("sem_end_date"); if (!semEndStr) return {}; const end = new Date(semEndStr); const cursor = new Date(); cursor.setDate(cursor.getDate() + 1); const subjectCounts = {};
    while (cursor <= end) { const dStr = getStorageDateKey(cursor); if (!getHolidayForDate(dStr)) { const dayName = cursor.toLocaleDateString("en-US", { weekday: "long" }); const lectures = timetable[dayName] || []; lectures.forEach(lec => { const sub = lec[1]; if(!subjectCounts[sub]) subjectCounts[sub] = 0; subjectCounts[sub]++; }); } cursor.setDate(cursor.getDate() + 1); }
    return subjectCounts;
}

function renderSummary(){
  const div = document.getElementById("summary"); div.innerHTML = "";
  let tp = 0, tt = 0; const target = MIN_ATTENDANCE / 100; const futureSlots = getRemainingFutureSlots(); let totalRemaining = 0; Object.values(futureSlots).forEach(count => totalRemaining += count); const semEndDateExists = !!localStorage.getItem("sem_end_date");
  
  const predictedAbsences = getPredictedAbsences(); let totalPredictedAbsences = 0; Object.values(predictedAbsences).forEach(v => totalPredictedAbsences += v); const allSubjectsSet = new Set([...Object.keys(data.totals), ...Object.keys(predictedAbsences)]);

  let subjectListHTML = "";

  for(let s of allSubjectsSet){
    const orig = data.totals[s] || {p:0, t:0}; const predMissed = predictedAbsences[s] || 0; const p = orig.p; const t = orig.t + predMissed; 
    const percent = t ? Math.round((p / t) * 100) : 0; tp += p; tt += t;
    
    let gradient = "";
    if(percent >= MIN_ATTENDANCE) { gradient = "linear-gradient(90deg, #10b981 0%, #34d399 100%)"; } else if (percent >= (MIN_ATTENDANCE - 15)) { gradient = "linear-gradient(90deg, #84cc16 0%, #a3e635 100%)"; } else if (percent >= (MIN_ATTENDANCE - 25)) { gradient = "linear-gradient(90deg, #f97316 0%, #fb923c 100%)"; } else { gradient = "linear-gradient(90deg, #ef4444 0%, #f87171 100%)"; }
    
    let statusMsg = "", statusColor = "text-muted", statusIcon = "";
    let remaining = futureSlots[s] || 0; remaining = Math.max(0, remaining - predMissed);
    const maxPossibleP = p + remaining; const maxPossibleT = t + remaining; const maxPossiblePercent = maxPossibleT ? (maxPossibleP / maxPossibleT) : 0;
    
    if (t > 0) {
        if (percent >= MIN_ATTENDANCE) { const bunkable = Math.floor((p / target) - t); if(bunkable > 0){ statusMsg = `Safe to bunk <b>${bunkable}</b>`; statusColor = "text-green"; statusIcon = ICONS.check; } else { if(percent === 100){ statusMsg = `Perfect record`; statusColor = "text-green"; statusIcon = ICONS.check; } else { statusMsg = `Don't miss next`; statusColor = "text-yellow"; statusIcon = ICONS.x; } } } else { if (semEndDateExists && maxPossiblePercent < target) { statusMsg = `<b>Impossible</b> (Max: ${Math.round(maxPossiblePercent * 100)}%)`; statusColor = "text-red"; statusIcon = ICONS.x; } else { const needed = Math.ceil( (target * t - p) / (1 - target) ); statusMsg = `Attend next <b>${needed}</b>`; statusColor = "text-red"; statusIcon = ICONS.x; } }
    } else { statusMsg = "No data"; }

    let titleHTML = `<div style="display:flex; align-items:center; flex:1; min-width:0; margin-right:10px;"><span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${s}</span>`;
    if (predMissed > 0) { titleHTML += `<span class="predicted-badge" style="white-space:nowrap; flex-shrink:0;">-${predMissed}</span>`; }
    titleHTML += `</div>`;
    
    subjectListHTML += `<div class="summary-item" onclick="openSubjectDetail('${s}')"><div class="summary-header" style="align-items:center;">${titleHTML}<span style="color:var(--text-muted); font-weight:700; flex-shrink:0;">${p}/${t} <span style="color:var(--text-main); margin-left:4px;">${percent}%</span></span></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%; background:${gradient}; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div></div><div class="status-msg ${statusColor}"><span class="icon-sm" style="display:inline-block; vertical-align:middle;">${statusIcon}</span>${statusMsg}</div></div>`;
  }
  
  const overall = tt ? Math.round((tp / tt) * 100) : 0; 
  let overallColor = "var(--green)"; if(overall < MIN_ATTENDANCE) overallColor = "var(--red)"; else if(overall < MIN_ATTENDANCE + 10) overallColor = "var(--yellow)";
  let overallMsg = ""; totalRemaining = Math.max(0, totalRemaining - totalPredictedAbsences);

  if(tt > 0) { if (overall < MIN_ATTENDANCE) { const overallMaxPossibleP = tp + totalRemaining; const overallMaxPossibleT = tt + totalRemaining; const overallMaxPercent = overallMaxPossibleT ? (overallMaxPossibleP / overallMaxPossibleT) : 0; if(semEndDateExists && overallMaxPercent < target) { overallMsg = `Impossible to reach ${MIN_ATTENDANCE}% (Max: ${Math.round(overallMaxPercent * 100)}%)`; } else { const overallNeeded = Math.ceil( (target * tt - tp) / (1 - target) ); overallMsg = `Attend next ${overallNeeded} classes to hit ${MIN_ATTENDANCE}%`; } } else { const overallBunk = Math.floor((tp / target) - tt); if(overallBunk > 0) overallMsg = `Can safely bunk ${overallBunk} classes`; else overallMsg = "Don't miss any upcoming classes"; } }
  else { overallMsg = "Start marking attendance to see insights."; }
  
  let predictWarning = (isPredictiveModeOn && predictUntilDate) ? `<div style="font-size:12px; color:#c084fc; margin-top:20px; font-weight:800; background: rgba(168, 85, 247, 0.1); padding: 10px 16px; border-radius: 12px; border: 1px dashed rgba(168, 85, 247, 0.4); text-transform:uppercase; letter-spacing:1px; width:100%; text-align:center;">🔮 Predicting Future</div>` : "";
  
  const radius = 64; const circumference = 2 * Math.PI * radius; const strokeDashoffset = circumference - (overall / 100) * circumference;

  const heroHTML = `
    <div class="overall-card">
        <div style="font-size:14px; color:var(--text-muted); text-transform:uppercase; letter-spacing:2px; font-weight:800;">Overall Progress</div>
        <div class="circular-progress-container">
            <svg class="circular-progress-svg" viewBox="0 0 160 160">
                <circle class="circular-bg" cx="80" cy="80" r="${radius}"></circle>
                <circle class="circular-fill" cx="80" cy="80" r="${radius}" style="stroke: ${overallColor}; stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset}; filter: drop-shadow(0 0 8px ${overallColor}80);"></circle>
            </svg>
            <div class="circular-text-container"><div class="circular-percent" style="color:${overallColor}">${overall}%</div><div class="circular-label">${tp} / ${tt}</div></div>
        </div>
        <div style="font-size:15px; font-weight:600; color:var(--text-main); text-align:center; padding:0 10px;">${overallMsg}</div>
        ${predictWarning}
    </div>`;
  
  div.innerHTML = heroHTML + `<div style="margin-top:24px;">${subjectListHTML}</div>`;
}

function openSubjectDetail(subject) { const modal = document.getElementById('subjectDetailModal'); const title = document.getElementById('subjectDetailTitle'); const list = document.getElementById('subjectDetailList'); title.innerText = subject; list.innerHTML = ""; const dates = Object.keys(data.history).sort().reverse(); let found = false; dates.forEach(d => { data.history[d].forEach(entry => { if(entry.subject === subject) { found = true; let colorClass = entry.status === 'Present' ? 'text-green' : (entry.status === 'Cancelled' ? 'text-muted' : 'text-red'); list.innerHTML += `<div style="display:flex; justify-content:space-between; padding:16px 0; border-bottom:1px solid var(--border-color);"><div><div style="font-size:15px; font-weight:700;">${formatDateDDMMYYYY(d)}</div><div style="font-size:13px; font-weight:500; color:var(--text-muted); margin-top:4px;">${getDayName(d)}</div></div><div class="${colorClass}" style="font-weight:800; font-size:15px; display:flex; align-items:center;">${entry.status}</div></div>`; } }); }); if(!found) list.innerHTML = "<div style='text-align:center; color:var(--text-muted); font-weight:600; margin-top:30px;'>No history found.</div>"; modal.style.display = "flex"; }
function closeSubjectDetail() { document.getElementById('subjectDetailModal').style.display = "none"; }
function undo(d,i){ const h = data.history[d][i]; const key = d+"_"+h.subject+"_"+h.time; delete data.locks[key]; if(h.status!=="Cancelled"){ data.totals[h.subject].t--; if(h.status==="Present") data.totals[h.subject].p--; } data.history[d].splice(i,1); save(); render(); showToast("Entry Undone"); toggleUndo(); toggleUndo(); document.getElementById("undoSection").style.display="none"; }
function triggerReset(){ const modal = document.getElementById('passwordModal'); const input = document.getElementById('resetPasswordInput'); const btn = document.getElementById('submitPasswordBtn'); input.value = ""; modal.style.display = "flex"; input.focus(); btn.onclick = () => { if(input.value === USER_PIN) { closePasswordModal(); showConfirm("Factory Reset?", "All data will be lost permanently.", () => { localStorage.removeItem("attendance"); localStorage.removeItem("target_percent"); localStorage.removeItem("user_pin"); localStorage.removeItem("sem_start_date"); localStorage.removeItem("sem_end_date"); location.reload(); }); } else { showToast("Wrong PIN", "error"); input.value = ""; input.focus(); } }; }
function getAllSubjects() { const set = new Set(); Object.values(timetable).flat().forEach(x => set.add(x[1])); return [...set].sort(); }
function initExtra(){ const select = document.getElementById("extraSubject"); if (select.parentNode.classList.contains("custom-select-wrapper")) { const wrapper = select.parentNode; wrapper.parentNode.insertBefore(select, wrapper); wrapper.remove(); } select.innerHTML = getAllSubjects().map(s=>`<option>${s}</option>`).join(""); setupCustomSelects(); }

let pastBuffer = [], pastDateKey = "", pastDay = "";
function loadPastTimetable(){ const input = document.getElementById("pastDate"); const val = input.value; const container = document.getElementById("pastLectures"); const extraDiv = document.getElementById("pastExtra"); const semStart = localStorage.getItem("sem_start_date"); const semEnd = localStorage.getItem("sem_end_date"); const todayStr = new Date().toISOString().split('T')[0]; if(semStart) input.min = semStart; let maxDate = todayStr; if(semEnd && semEnd < todayStr) maxDate = semEnd; input.max = maxDate; container.innerHTML = ""; extraDiv.innerHTML = ""; pastBuffer = []; if(!val) return; if (val > maxDate) { showToast("Cannot edit future / beyond semester", "error"); input.value = ""; return; } pastDateKey = val; const selectedDate = new Date(val); pastDay = selectedDate.toLocaleDateString("en-US",{weekday:"long"}); const pastHoliday = getHolidayForDate(pastDateKey); if(pastHoliday) { container.innerHTML = `<div class="holiday-card"><div class="weekend-icon">🎉</div><div class="weekend-title">${pastHoliday.name}</div><div style="font-size:14px; color:var(--text-muted);">Event/Holiday detected.</div></div>`; } else { let existingData = data.history[pastDateKey] || []; let isEditMode = existingData.length > 0; if(isEditMode) { showToast("Editing saved record ✏️"); pastBuffer = [...existingData]; } const lectures = timetable[pastDay] || []; if(lectures.length === 0){ container.innerHTML = "<div style='text-align:center; padding:20px; font-weight:600; color:var(--text-muted);'>No lectures scheduled 😴</div>"; } lectures.forEach(([time,subject])=>{ const div = document.createElement("div"); div.className = "card lecture-card"; div.style.marginBottom = "12px"; const savedState = existingData.find(h => h.subject === subject && h.time === time); const status = savedState ? savedState.status : ""; div.innerHTML = `<div style="font-weight:700; font-size:16px; margin-bottom:6px;">${subject}</div><div style="font-size:13px; font-weight:600; color:var(--text-muted); margin-bottom:12px;">${time}</div><div class="action-row" id="btns_${subject.replace(/\s/g,'')}"><button class="btn-pill ${status==='Present'?'present':'btn-secondary'}" onclick="pastMark('${subject}', '${time}', 'Present', this)">Present</button><button class="btn-pill ${status==='Absent'?'absent':'btn-secondary'}" onclick="pastMark('${subject}', '${time}', 'Absent', this)">Absent</button><button class="btn-pill ${status==='Cancelled'?'cancelled':'btn-secondary'}" onclick="pastMark('${subject}', '${time}', 'Cancelled', this)">Off</button></div>`; container.appendChild(div); }); } const existingExtras = (data.history[pastDateKey] || []).filter(h => h.time === "Extra"); let extraHTML = ""; if(existingExtras.length > 0) { existingExtras.forEach(ex => { extraHTML += `<div class="task-item" style="margin-bottom:8px;"><span><span style="font-weight:600;">${ex.subject}</span> <span style="font-size:12px; color:var(--text-muted);">(Extra)</span></span> <div style="display:flex; align-items:center; gap:12px;"><span class="${ex.status==='Present'?'text-green':'text-red'}" style="font-weight:700;">${ex.status}</span><button class="del-task-btn" onclick="removePastExtra('${ex.subject}')">×</button></div></div>`; }); } const allSubjects = getAllSubjects(); extraDiv.innerHTML = `<div style="height:1px; background:var(--border-color); margin:20px 0;"></div><div id="existingExtrasList">${extraHTML}</div><h4 style='margin:16px 0 12px 0; font-size:15px; font-weight:700;'>➕ Add Extra Class</h4><select id="pastExtraSubject" class="custom-select-source">${allSubjects.map(s=>`<option>${s}</option>`).join("")}</select><div class="action-row"><button class="btn-pill btn-secondary" onclick="addPastExtra('Present')">Present</button><button class="btn-pill btn-secondary" onclick="addPastExtra('Absent')">Absent</button></div>`; setupCustomSelects(); }
function pastMark(sub, time, stat, btn){ pastBuffer = pastBuffer.filter(x => !(x.subject === sub && x.time === time)); pastBuffer.push({ subject: sub, time: time, status: stat }); const parent = btn.parentElement; parent.querySelectorAll('.btn-pill').forEach(b => { b.className = 'btn-pill btn-secondary'; }); let activeClass = stat === "Present" ? "present" : (stat === "Absent" ? "absent" : "cancelled"); btn.className = `btn-pill ${activeClass}`; }
function addPastExtra(status){ const subject = document.getElementById("pastExtraSubject").value; if(pastBuffer.find(x=>x.subject===subject && x.time==="Extra")){ showToast("Already in list", "error"); return; } pastBuffer.push({subject, time:"Extra", status}); const list = document.getElementById("existingExtrasList"); list.innerHTML += `<div class="task-item" style="margin-bottom:8px;"><span><span style="font-weight:600;">${subject}</span> <span style="font-size:12px; color:var(--text-muted);">(Extra)</span></span> <span class="${status==='Present'?'text-green':'text-red'}" style="font-weight:700;">${status}</span></div>`; }
function removePastExtra(subject){ pastBuffer = pastBuffer.filter(x => !(x.subject === subject && x.time === "Extra")); loadPastTimetable(); }
function savePastAttendance(){ if(!pastDateKey){ showToast("Select a date", "error"); return; } if(pastBuffer.length === 0){ showToast("No data to save", "error"); return; } if(data.history[pastDateKey]) { data.history[pastDateKey].forEach(oldEntry => { if(oldEntry.status !== "Cancelled" && data.totals[oldEntry.subject]){ data.totals[oldEntry.subject].t--; if(oldEntry.status === "Present") data.totals[oldEntry.subject].p--; } }); } data.history[pastDateKey] = pastBuffer; pastBuffer.forEach(h => { if(h.status !== "Cancelled"){ data.totals[h.subject] ??= {p:0,t:0}; data.totals[h.subject].t++; if(h.status === "Present") data.totals[h.subject].p++; } const lockKey = pastDateKey + "_" + h.subject + "_" + h.time; data.locks[lockKey] = true; }); save(); render(); showToast("History Updated ✅"); document.getElementById("pastDate").value = ""; document.getElementById("pastLectures").innerHTML = ""; document.getElementById("pastExtra").innerHTML = ""; }

function toggleUndo(){ const sec = document.getElementById("undoSection"); sec.style.display = (sec.style.display === "none" || sec.style.display === "") ? "block" : "none"; if(sec.style.display === "block"){ sec.innerHTML = ""; if(!data.history[dateKey] || data.history[dateKey].length === 0){ sec.innerHTML = "<div style='text-align:center; color:var(--text-muted); font-size:14px; font-weight:600;'>Nothing to undo today 😴</div>"; return; } data.history[dateKey].forEach((h,i)=>{ sec.innerHTML += `<div class="task-item"><span><span style="font-weight:600;">${h.subject}</span> <span style="font-size:13px; color:var(--text-muted); margin-left:6px;">(${h.status})</span></span> <button class="del-task-btn" onclick="event.stopPropagation(); undo('${dateKey}',${i})">${ICONS.undo}</button></div>`; }); } }
function lockNoExtra(){ const key = dateKey + "_NO_EXTRA"; if(data.locks[key]) return; data.locks[key] = true; save(); render(); showToast("Locked for today"); }
function getDayName(dateStr){ const d = new Date(dateStr + "T00:00:00"); return isNaN(d) ? "" : d.toLocaleDateString("en-US", { weekday: "long" }); }
function formatDateDDMMYYYY(isoDate){ if(!isoDate) return ""; const [y, m, d] = isoDate.split("-"); return `${d}/${m}/${y}`; }
function showWeekendMessage(day){ const statusDiv = document.getElementById("dayStatus"); if (getHolidayForDate(dateKey)) { statusDiv.innerHTML = ""; return; } if(day === "Saturday" || day === "Sunday"){ statusDiv.innerHTML = `<div class="weekend-card"><div class="weekend-icon">☕</div><div class="weekend-title">It's the Weekend</div><div style="font-size:14px; color:var(--text-muted); font-weight:500;">Take a break, no lectures today!</div></div>`; } else { statusDiv.innerHTML = ""; } }

function renderDetailView(){ const mode = document.getElementById("viewMode").value; const filter = document.getElementById("filterArea"); const result = document.getElementById("detailResult"); filter.innerHTML = ""; result.innerHTML = ""; if(mode === "date"){ const dates = Object.keys(data.history).sort().reverse(); if(!dates.length){ result.innerText = "No data yet"; return; } filter.innerHTML = `<select id="dateSelect" class="custom-select-source" onchange="showDateWise()"><option value="">Select Date</option>${dates.map(d=>`<option value="${d}">${formatDateDDMMYYYY(d)}</option>`).join("")}</select>`; setupCustomSelects(); } if(mode === "subject"){ const subjects = Object.keys(data.totals).sort(); if(!subjects.length){ result.innerText = "No data yet"; return; } filter.innerHTML = `<select id="subjectSelect" class="custom-select-source" onchange="showSubjectWise()"><option value="">Select Subject</option>${subjects.map(s=>`<option value="${s}">${s}</option>`).join("")}</select>`; setupCustomSelects(); } }
function showDateWise(){ const d = document.getElementById("dateSelect").value; if(!d || !data.history[d]) return; const result = document.getElementById("detailResult"); result.innerHTML = `<div style="margin-bottom:16px; font-weight:800; font-size:16px; color:var(--text-main);">${formatDateDDMMYYYY(d)} <span style="color:var(--text-muted); font-size:14px; font-weight:600;">(${getDayName(d)})</span></div>`; data.history[d].forEach(h=>{ let colorClass = h.status === 'Present' ? 'text-green' : (h.status === 'Cancelled' ? 'text-muted' : 'text-red'); result.innerHTML += `<div class="task-item" style="border-left:none; background:transparent; padding:12px 0; border-bottom:1px solid var(--border-color); border-radius:0;"><div><div style="font-weight:700; color:var(--text-main); font-size:15px;">${h.subject}</div><div style="font-size:12px; font-weight:600; color:var(--text-muted); margin-top:4px;">${h.time}</div></div> <span class="${colorClass}" style="font-weight:800;">${h.status}</span></div>`; }); }
function showSubjectWise(){ const sub = document.getElementById("subjectSelect").value; if(!sub) return; const result = document.getElementById("detailResult"); result.innerHTML = ""; Object.keys(data.history).sort().reverse().forEach(d=>{ data.history[d].forEach(h=>{ if(h.subject === sub){ let colorClass = h.status === 'Present' ? 'text-green' : (h.status === 'Cancelled' ? 'text-muted' : 'text-red'); result.innerHTML += `<div class="task-item" style="border-left:none; background:transparent; padding:12px 0; border-bottom:1px solid var(--border-color); border-radius:0;"><span style="font-weight:700; color:var(--text-main); font-size:15px;">${formatDateDDMMYYYY(d)}</span> <span class="${colorClass}" style="font-weight:800;">${h.status}</span></div>`; } }); }); }
function exportBackup(){ const backup = { version: 15, timestamp: new Date().toISOString(), data: data }; const blob = new Blob([JSON.stringify(backup, null, 2)],{ type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `attendance_backup_${dateKey}.json`; a.click(); URL.revokeObjectURL(a.href); showToast("Backup Downloaded"); }
document.getElementById("importFile").addEventListener("change", function(e){ const file = e.target.files[0]; if(!file) return; const reader = new FileReader(); reader.onload = function(){ try { const backup = JSON.parse(reader.result); if (!backup.data || typeof backup.data.history !== 'object' || typeof backup.data.totals !== 'object') { throw new Error("Invalid file structure"); } showConfirm("Overwrite Data?", "This will replace all current data.", () => { data = backup.data; if(!data.tasks) data.tasks = []; if(!data.history) data.history = {}; if(!data.totals) data.totals = {}; if(!data.locks) data.locks = {}; if(!data.holidays) data.holidays = []; save(); render(); showToast("Restored successfully"); }); } catch(err) { console.error(err); showToast("Invalid/Corrupt Backup File", "error"); } e.target.value = ''; }; reader.readAsText(file); });

const modal = document.getElementById("settingsModal");
function saveSettings() {
    const input = document.getElementById("targetInput"); const val = parseInt(input.value); if (!val || val < 1 || val > 100) { showToast("Target must be 1-100%", "error"); return; } MIN_ATTENDANCE = val; localStorage.setItem("target_percent", val);
    const startVal = document.getElementById("semStartInput").value; localStorage.setItem("sem_start_date", startVal); const endVal = document.getElementById("semEndInput").value; localStorage.setItem("sem_end_date", endVal);
    const pastInput = document.getElementById("pastDate"); const todayStr = new Date().toISOString().split('T')[0]; if(pastInput) { if(startVal) pastInput.min = startVal; let maxDate = todayStr; if(endVal && endVal < todayStr) maxDate = endVal; pastInput.max = maxDate; }
    showToast("Preferences Saved"); setTimeout(() => location.reload(), 500); 
}
function openSettings() { 
    modal.style.display = "flex"; document.getElementById("targetInput").value = MIN_ATTENDANCE; document.getElementById("semStartInput").value = localStorage.getItem("sem_start_date") || ""; document.getElementById("semEndInput").value = localStorage.getItem("sem_end_date") || ""; document.getElementById("editDaySelect").value = day; 
    const renameSelect = document.getElementById("renameOldSubject"); if (renameSelect.parentNode.classList.contains("custom-select-wrapper")) { const wrapper = renameSelect.parentNode; wrapper.parentNode.insertBefore(renameSelect, wrapper); wrapper.remove(); } const subjectList = getAllSubjects(); renameSelect.innerHTML = subjectList.map(s => `<option value="${s}">${s}</option>`).join("");
    renderSettingsCalendar(); renderHolidays(); renderEditRows(); setupCustomSelects(); 
}
function closeSettings() { modal.style.display = "none"; }
function renameSubject() { const oldName = document.getElementById("renameOldSubject").value; const newName = document.getElementById("renameNewName").value.trim(); if(!oldName || !newName) return showToast("Enter new name", "error"); if(oldName === newName) return showToast("Names are same", "error"); showConfirm("Rename / Merge?", `This will change '${oldName}' to '${newName}' in all history and timetable.`, () => { if(!data.totals[newName]) data.totals[newName] = { p:0, t:0 }; if(data.totals[oldName]) { data.totals[newName].p += data.totals[oldName].p; data.totals[newName].t += data.totals[oldName].t; delete data.totals[oldName]; } Object.keys(data.history).forEach(date => { data.history[date].forEach(entry => { if(entry.subject === oldName) entry.subject = newName; }); Object.keys(data.locks).forEach(lockKey => { if(lockKey.includes(`_${oldName}_`)) { data.locks[lockKey.replace(`_${oldName}_`, `_${newName}_`)] = true; delete data.locks[lockKey]; } }); }); data.tasks.forEach(t => { if(t.subject === oldName) t.subject = newName; }); Object.keys(timetable).forEach(d => { timetable[d].forEach(slot => { if(slot[1] === oldName) slot[1] = newName; }); }); localStorage.setItem("custom_timetable", JSON.stringify(timetable)); save(); document.getElementById("renameNewName").value = ""; showToast("Renamed successfully"); setTimeout(() => location.reload(), 500); }); }
function setNewPin() { const pin = document.getElementById("newPinInput").value; if(pin.length !== 4 || isNaN(pin)) return showToast("Enter 4-digit PIN", "error"); USER_PIN = pin; localStorage.setItem("user_pin", pin); document.getElementById("newPinInput").value = ""; showToast("Security PIN Updated"); }
function renderEditRows() { const selectedDay = document.getElementById("editDaySelect").value; const container = document.getElementById("editContainer"); container.innerHTML = ""; const existingSubjects = Object.keys(data.totals).sort(); const datalist = document.getElementById("subjectSuggestions"); datalist.innerHTML = existingSubjects.map(s => `<option value="${s}">`).join(""); const lectures = timetable[selectedDay] || []; lectures.forEach((lec, index) => { container.innerHTML += `<div class="edit-row" style="display:flex; gap:10px; margin-bottom:12px; align-items:center;"><input type="text" class="edit-input" style="width:35%; margin-bottom:0;" value="${lec[0]}" id="time_${index}" placeholder="Time"><input type="text" class="edit-input" style="width:65%; margin-bottom:0;" value="${lec[1]}" id="sub_${index}" list="subjectSuggestions" placeholder="Subject"><button style="background:var(--red-glow); color:var(--red); border:none; border-radius:12px; padding:0; width:46px; height:46px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:0.2s;" onclick="delEditRow(${index})">${ICONS.trash}</button></div>`; }); }
function addEditRow() { const selectedDay = document.getElementById("editDaySelect").value; timetable[selectedDay] ??= []; timetable[selectedDay].push(["00:00-00:00", "New Subject"]); renderEditRows(); }
function delEditRow(index) { const selectedDay = document.getElementById("editDaySelect").value; timetable[selectedDay].splice(index, 1); renderEditRows(); }
function saveNewTimetable() { const selectedDay = document.getElementById("editDaySelect").value; const container = document.getElementById("editContainer"); const rows = container.querySelectorAll(".edit-row"); const newDaySchedule = []; rows.forEach((row, index) => { const t = document.getElementById(`time_${index}`).value; const s = document.getElementById(`sub_${index}`).value.trim(); if(t && s) newDaySchedule.push([t, s]); }); timetable[selectedDay] = newDaySchedule; localStorage.setItem("custom_timetable", JSON.stringify(timetable)); showToast(`Saved ${selectedDay}`); setTimeout(() => location.reload(), 500); }

let chartInstance = null;
function renderChart() {
  const dates = Object.keys(data.history).sort(); let currentP = 0, currentT = 0; for(let s in data.totals){ currentP += data.totals[s].p; currentT += data.totals[s].t; } const chartData = []; const chartLabels = []; let tempP = currentP; let tempT = currentT; if(tempT > 0) { chartData.push(Math.round((tempP/tempT)*100)); chartLabels.push(formatDateDDMMYYYY(dateKey).slice(0,5)); } const relevantDates = dates.filter(d => d !== dateKey).reverse().slice(0, 30); relevantDates.forEach(d => { const dayEvents = data.history[d]; dayEvents.forEach(evt => { if(evt.status !== "Cancelled"){ tempT--; if(evt.status === "Present") tempP--; } }); if(tempT > 0) { chartData.push(Math.round((tempP/tempT)*100)); chartLabels.push(formatDateDDMMYYYY(d).slice(0,5)); } }); chartData.reverse(); chartLabels.reverse();
  const ctx = document.getElementById('attendanceChart'); if(!ctx) return; if(chartInstance) chartInstance.destroy();
  const glowPlugin = { id: 'glow', beforeDraw: (chart) => { const ctx = chart.ctx; ctx.save(); ctx.shadowColor = 'rgba(59, 130, 246, 0.4)'; ctx.shadowBlur = 15; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 4; }, afterDraw: (chart) => { chart.ctx.restore(); } };
  chartInstance = new Chart(ctx, { type: 'line', data: { labels: chartLabels, datasets: [{ label: 'Overall %', data: chartData, borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderWidth: 3, tension: 0.4, pointRadius: 0, pointHitRadius: 20, fill: true }] }, plugins: [glowPlugin], options: { responsive: true, maintainAspectRatio: false, layout: { padding: { top: 10, right: 10, left: 10, bottom: 10 } }, scales: { y: { beginAtZero: true, min: 0, max: 100, grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false }, ticks: { color: '#a1a1aa', font: { family: "'Plus Jakarta Sans', sans-serif", weight: '600' } } }, x: { grid: { display: false, drawBorder: false }, ticks: { color: '#a1a1aa', maxTicksLimit: 6, font: { family: "'Plus Jakarta Sans', sans-serif", weight: '600' } } } }, plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(11, 15, 25, 0.95)', titleColor: '#f4f4f5', bodyColor: '#3b82f6', titleFont: { family: "'Plus Jakarta Sans'", size: 13 }, bodyFont: { family: "'Plus Jakarta Sans'", size: 14, weight: 'bold' }, padding: 12, cornerRadius: 12, displayColors: false, borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1 } } } });
}

let currentCalendarDate = new Date();
function changeMonth(delta) { currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta); renderCalendar(); }
function renderCalendar() {
    const grid = document.getElementById('calendarGrid'); grid.innerHTML = ""; const year = currentCalendarDate.getFullYear(); const month = currentCalendarDate.getMonth(); const firstDay = new Date(year, month, 1); const lastDay = new Date(year, month + 1, 0); const totalDays = lastDay.getDate(); let startDayIndex = firstDay.getDay(); startDayIndex = (startDayIndex === 0) ? 6 : startDayIndex - 1; 
    document.getElementById('calMonthYear').innerText = `${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}`;
    for(let i=0; i<startDayIndex; i++) { const empty = document.createElement('div'); grid.appendChild(empty); }
    const todayStr = new Date().toISOString().split('T')[0];
    for(let i=1; i<=totalDays; i++) {
        const dateObj = new Date(year, month, i); const yStr = dateObj.getFullYear(); const mStr = String(dateObj.getMonth() + 1).padStart(2,'0'); const dStr = String(dateObj.getDate()).padStart(2,'0'); const key = `${yStr}-${mStr}-${dStr}`;
        const dayEl = document.createElement('div'); dayEl.className = 'cal-day'; if(key === todayStr) dayEl.classList.add('today'); dayEl.innerText = i;
        const holiday = getHolidayForDate(key);
        let dotColor = null;
        if (holiday) { if(holiday.type === 'exam') dotColor = 'orange'; else if(holiday.type === 'off') dotColor = 'green'; else dotColor = 'purple';
        } else if (data.history[key] && data.history[key].length > 0) { const history = data.history[key]; const anyAbsent = history.some(h => h.status === 'Absent'); const allCancelled = history.every(h => h.status === 'Cancelled'); if (anyAbsent) dotColor = 'red'; else if (!allCancelled) dotColor = 'green'; }
        if(dotColor) { const dot = document.createElement('div'); dot.className = `dot ${dotColor}`; dayEl.appendChild(dot); }
        dayEl.onclick = () => showCalendarDetail(key, i); grid.appendChild(dayEl);
    }
}

function showCalendarDetail(key, dayNum) {
    const detail = document.getElementById('calendarDetail'); detail.style.display = 'block';
    document.querySelectorAll('.cal-day').forEach(d => { d.classList.remove('selected'); if(d.innerText == dayNum) d.classList.add('selected'); });
    let content = `<div style="font-weight:800; font-size:16px; margin-bottom:12px; color:var(--text-main);">${formatDateDDMMYYYY(key)}</div>`;
    const holiday = getHolidayForDate(key);
    if(holiday) {
        let label = "Holiday"; let color = "#a78bfa";
        if(holiday.type === 'exam') { label = "Exam"; color = "#fbbf24"; }
        if(holiday.type === 'off') { label = "Off"; color = "#a1a1aa"; }
        content += `<span style="color:${color}; font-weight:700; background:rgba(255,255,255,0.05); padding:6px 12px; border-radius:8px;">🎉 ${label}: ${holiday.name}</span>`;
    } else if (data.history[key]) {
        data.history[key].forEach(h => { let color = h.status === 'Present' ? 'var(--green)' : (h.status === 'Absent' ? 'var(--red)' : 'var(--text-muted)'); content += `<div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:600; font-size:15px;">${h.subject}</span><span style="color:${color}; font-weight:800; font-size:15px;">${h.status}</span></div>`; });
    } else { const dObj = new Date(key); if(dObj.getDay() === 0 || dObj.getDay() === 6) content += `<span style="color:var(--text-muted); font-weight:600;">Weekend (No classes)</span>`; else content += `<span style="color:var(--text-muted); font-weight:600;">No data recorded</span>`; }
    detail.innerHTML = content;
}

// --- PDF GENERATION LOGIC ---
async function generatePDFReport() {
    if (!window.jspdf) { showToast("PDF Library loading, try again in a second", "error"); return; }
    showToast("Generating PDF...");
    const { jsPDF } = window.jspdf; const doc = new jsPDF();

    doc.setFontSize(22); doc.setTextColor(15, 23, 42); doc.text("Attendance Pro - Academic Report", 14, 20);
    doc.setFontSize(11); doc.setTextColor(100); const generatedDate = new Date().toLocaleDateString(); let userNameText = "User: Student Profile"; if (typeof currentUser !== 'undefined' && currentUser && currentUser.displayName) { userNameText = `User: ${currentUser.displayName}`; }
    
    doc.text(userNameText, 14, 30); doc.text(`Generated on: ${generatedDate}`, 14, 36); doc.text(`Target Attendance: ${MIN_ATTENDANCE}%`, 14, 42);
    doc.setFontSize(14); doc.setTextColor(15, 23, 42); doc.text("Subject Summary", 14, 55);

    const summaryBody = []; let tp = 0, tt = 0;
    for (let s in data.totals) { const { p, t } = data.totals[s]; const percent = t ? Math.round((p / t) * 100) : 0; tp += p; tt += t; let status = percent >= MIN_ATTENDANCE ? "Safe" : "Low"; summaryBody.push([s, p.toString(), t.toString(), `${percent}%`, status]); }
    const overall = tt ? Math.round((tp / tt) * 100) : 0; summaryBody.push(["OVERALL TOTAL", tp.toString(), tt.toString(), `${overall}%`, overall >= MIN_ATTENDANCE ? "Safe" : "Low"]);

    doc.autoTable({ startY: 60, head: [['Subject', 'Present', 'Total', 'Percentage', 'Status']], body: summaryBody, theme: 'striped', headStyles: { fillColor: [15, 23, 42] }, alternateRowStyles: { fillColor: [241, 245, 249] }, willDrawCell: function (data) { if (data.section === 'body' && data.column.index === 4) { if (data.cell.raw === 'Safe') doc.setTextColor(16, 185, 129); else if (data.cell.raw === 'Low') doc.setTextColor(239, 68, 68); doc.setFont(undefined, 'bold'); } if (data.section === 'body' && data.row.index === summaryBody.length - 1) { doc.setFont(undefined, 'bold'); } } });

    let finalY = doc.lastAutoTable.finalY + 15; doc.setFontSize(14); doc.setTextColor(15, 23, 42); doc.text("Detailed Attendance Log", 14, finalY);

    const logBody = []; const dates = Object.keys(data.history).sort((a, b) => new Date(a) - new Date(b));
    dates.forEach(d => { const dayName = getDayName(d); const dateStr = formatDateDDMMYYYY(d); data.history[d].forEach(entry => { logBody.push([dateStr, dayName, entry.subject, entry.time, entry.status]); }); });
    if (logBody.length === 0) { logBody.push(["No data recorded yet.", "", "", "", ""]); }

    doc.autoTable({ startY: finalY + 5, head: [['Date', 'Day', 'Subject', 'Time', 'Status']], body: logBody, theme: 'grid', headStyles: { fillColor: [59, 130, 246] }, styles: { fontSize: 10 }, willDrawCell: function (data) { if (data.section === 'body' && data.column.index === 4) { if (data.cell.raw === 'Present') doc.setTextColor(16, 185, 129); else if (data.cell.raw === 'Absent') doc.setTextColor(239, 68, 68); else doc.setTextColor(148, 163, 184); doc.setFont(undefined, 'bold'); } } });

    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) { doc.setPage(i); doc.setFontSize(9); doc.setTextColor(150); doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: 'center' }); }
    doc.save(`Attendance_Report_${dateKey}.pdf`); showToast("PDF Downloaded!");
}

function render(){ showWeekendMessage(day); document.getElementById("today").innerText = `${day}, ${formatDateDDMMYYYY(dateKey)}`; loadLectures(); renderSummary(); renderTasks(); renderChart(); const noExtraKey = dateKey + "_NO_EXTRA"; if(data.locks[noExtraKey]){ document.getElementById("extraSubject").disabled = true; document.querySelectorAll(".card button").forEach(btn=>{ if(btn.innerText.includes("Present") || btn.innerText.includes("Absent") || btn.innerText.includes("Off")){ btn.disabled = true; } }); document.getElementById("extraInfo").innerText = "✔ No extra lectures today"; } }
window.onload = function() { const splash = document.getElementById('app-splash'); setTimeout(() => { splash.style.opacity = '0'; splash.style.visibility = 'hidden'; }, 1500); initExtra(); render(); };
