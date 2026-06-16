/* ==========================================================================
   INFINITY SOLAR - ULTIMATE LIGHT THEME INTERACTIVE ENGINE
   ========================================================================== */

// 1. DATA STATE CONFIGURATIONS
const PRODUCTS_DATA = {
    panels: [
        { name: "Infinity TopCon N-Type Bifacial", badge: "FLAGSHIP", img: "panel", specs: { "Power Output": "580W - 610W", "Efficiency": "22.8%", "Warranty": "30 Years Performance" } },
        { name: "Apex Mono PERC Half-Cut", badge: "POPULAR", img: "panel", specs: { "Power Output": "540W - 550W", "Efficiency": "21.6%", "Warranty": "25 Years Performance" } },
        { name: "Vertex N-Type Double Glass", badge: "ENTERPRISE", img: "panel", specs: { "Power Output": "620W - 650W", "Efficiency": "22.4%", "Warranty": "30 Years Performance" } }
    ],
    inverters: [
        { name: "Nexus Hybrid Smart Inverter", badge: "SMART LOAD", img: "inverter", specs: { "Capacity Range": "5kW - 50kW Three Phase", "Smart IoT App": "Included (WiFi/4G)", "Warranty": "10 Years Warranty" } },
        { name: "Solis On-Grid Micro Inverter", badge: "EFFICIENT", img: "inverter", specs: { "Capacity": "1kW - 10kW Single Phase", "Efficiency": "98.2%", "Warranty": "5 Years Warranty" } }
    ],
    storage: [
        { name: "Aegis LFP Energy Wall", badge: "THERMAL SAFE", img: "battery", specs: { "Cell Chemistry": "LiFePO4 (Lithium Phosphate)", "Life Cycles": "6,000+ Cycles (90% DoD)", "Capacity": "10kWh / Scalable to 150kWh" } },
        { name: "Atlas Industrial LFP Container", badge: "GRID-SCALE", img: "battery", specs: { "Capacity": "1.2MWh - 5MWh Containerized", "Active Thermal": "Liquid Cooling Integrated", "Warranty": "15 Years Operations" } }
    ],
    accessories: [
        { name: "Solar Cables & Junction Boxes", badge: "SAFETY FIRST", img: "sun", specs: { "Cable Rating": "4mm² & 6mm² DC UV Protected", "IP Rating": "IP68 Dust & Water Proof", "Warranty": "5 Years Workmanship" } },
        { name: "Galvanized Mounting Structures", badge: "STRUCTURAL", img: "panel", specs: { "Wind Resistance": "Up to 180 km/h wind loads", "Material": "HDG Steel (Hot Dip Galvanized)", "Warranty": "10 Years Structural" } }
    ]
};

const PROJECTS_DATA = [
    { name: "Premium Rooftop Setup", capacity: "15.0 kW", category: "residential", location: "Bangalore, Karnataka", yield: "21,600 kWh / Year", ROI: "3.2 Yrs", date: "April 2026", feedback: "Our utility bill dropped to zero in the very first month. Outstanding yield!" },
    { name: "Apex Logistics Warehouse", capacity: "350.0 kW", category: "commercial", location: "Pune, Maharashtra", yield: "504,000 kWh / Year", ROI: "3.1 Yrs", date: "Jan 2026", feedback: "Smooth installation, robust structure, highly recommend Infinity Solar." },
    { name: "Sun Petrochemical Plant", capacity: "1.2 MW", category: "industrial", location: "Ahmedabad, Gujarat", yield: "1,720,000 kWh / Year", ROI: "3.5 Yrs", date: "Dec 2025", feedback: "Enterprise design alignment was superb. SpaceX-grade clean energy asset!" }
];

const BLOGS_DATA = [
    { title: "The Complete Net Metering Guide for Indian Homes", desc: "Understand how your electricity bill calculations scale when you feed surplus clean energy back into the DISCOM grid system.", category: "policy", read: "4 Min Read" },
    { title: "LFP vs NMC: Choosing Safe Solar Battery Systems", desc: "Compare thermal runaways, cyclic degradation lifespans, and safety factors of Lithium Iron Phosphate battery modules.", category: "tech", read: "7 Min Read" },
    { title: "How Commercial Solar Units Offset Carbon Compliance Audits", desc: "An review on corporate green credits and ESG metrics under the new energy compliance acts in India.", category: "sustain", read: "5 Min Read" }
];

const CAREERS_DATA = [
    { title: "Senior Solar PV Design Engineer", dept: "Engineering", loc: "Bangalore", exp: "5+ Years", desc: "Requires proficiency in PVsyst, AutoCAD, and electrical grid modeling for commercial/utility scale solar arrays." },
    { title: "Enterprise Sales Manager", dept: "Sales", loc: "Mumbai", exp: "4+ Years", desc: "Pitch smart solar rooftop solutions to corporate developers, steel mills, and utility boards across western regions." },
    { title: "IoT Systems & Monitoring Architect", dept: "Operations", loc: "Pune", exp: "3+ Years", desc: "Maintain and upgrade our smart cloud dashboard and hardware-level IoT telemetry gateways." }
];

const MEDIA_GALLERY_DATA = [
    { title: "Rooftop Mounting Grid", category: "rooftops", url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'><rect width='400' height='250' fill='%23EAF4FF'/><path d='M100 50h200v150H100z' stroke='%230A2540' stroke-width='4' fill='none'/></svg>" },
    { title: "Utility Solar Array Drone View", category: "drone", url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'><rect width='400' height='250' fill='%23F8FAFC'/><circle cx='200' cy='125' r='60' stroke='%23FDB813' stroke-width='4' fill='none'/></svg>" },
    { title: "Substation Inverter Connection", category: "rooftops", url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'><rect width='400' height='250' fill='%23EAF4FF'/><path d='M50 125h300' stroke='%232ECC71' stroke-width='6'/></svg>" }
];

const FAQ_LIST = [
    { q: "1. What is Infinity Solar?", a: "Infinity Solar is India's premier smart solar energy company. We design, manufacture, and install ultra-premium solar rooftops, utility projects, and battery storage solutions with Apple-like design detail and SpaceX-grade engineering." },
    { q: "2. How does solar energy work?", a: "Solar panels convert sunlight into Direct Current (DC) electricity using silicon photovoltaic cells. A smart inverter then converts this into Alternating Current (AC) electricity to power your home or business." },
    { q: "3. What is the PM Surya Ghar Muft Bijli Yojana?", a: "It is a flagship Government of India scheme aiming to provide free electricity to households by offering massive financial subsidies for installing solar panels up to 3 kW capacity." },
    { q: "4. Who is eligible for the PM Surya Ghar subsidy?", a: "Any Indian resident with a residential electricity connection, a clear roof area, and a valid domestic consumer number can apply for the subsidy." },
    { q: "5. How much subsidy can I get under the PM Surya Ghar scheme?", a: "For a 1 kW system, the subsidy is approx ₹30,000. For 2 kW, it is ₹60,000. For 3 kW and above, the subsidy is capped at ₹78,000, which significantly lowers your initial investment." },
    { q: "6. What is Net Metering?", a: "Net Metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If you generate more than you consume, the surplus flows back to the utility grid, reducing your bill." },
    { q: "7. What is the difference between On-Grid and Off-Grid solar systems?", a: "On-Grid systems connect to the local utility grid and send excess power back. Off-Grid systems run completely independently, storing excess solar power in custom battery packs for nighttime or rainy use." },
    { q: "8. What is a Hybrid solar system?", a: "A Hybrid solar system combines the best of both worlds: it is connected to the utility grid for net metering but also includes a local battery storage system to keep you powered during blackouts." },
    { q: "9. How much roof space do I need for a solar installation?", a: "On average, a 1 kW solar energy system requires approximately 80 to 100 square feet of shadow-free rooftop space." },
    { q: "10. What is the lifespan of solar panels?", a: "Our high-end panels are engineered to last over 25 to 30 years, coming with a 25-year linear performance warranty guaranteeing at least 85% output at year 25." },
    { q: "11. What kind of maintenance is required for solar panels?", a: "Very minimal. Standard maintenance only requires cleaning the dust off the panel surface with clean water once or twice a month, and scheduling an annual service check with us." },
    { q: "12. Do solar panels work during rainy or cloudy days?", a: "Yes, solar panels still generate electricity under cloudy skies, though at a reduced output (about 10% to 25% of their typical capacity) by capturing ambient diffused light." },
    { q: "13. How long does the installation process take?", a: "Residential setups are typically fully mounted and configured in 2 to 3 days. Commercial and industrial scale installations might take anywhere from 2 weeks to 2 months depending on size." },
    { q: "14. What are Mono PERC solar panels?", a: "Monocrystalline Passivated Emitter and Rear Cell (Mono PERC) panels feature an added reflective layer at the back of the cells, capturing more light and boosting efficiency to 21% or more." },
    { q: "15. What are Bifacial solar panels?", a: "Bifacial solar panels generate power from both the front side and the rear side by absorbing reflected light from the roof or ground surface, boosting total output by up to 25%." },
    { q: "16. What is TopCon solar technology?", a: "Tunnel Oxide Passivated Contact (TopCon) is the next generation of N-Type silicon technology. It minimizes internal carrier recombination, pushing commercial panel efficiency past 22.5%." },
    { q: "17. What warranty do you offer on solar panels?", a: "We provide a premium 12-year structural workmanship warranty, combined with an linear power generation output warranty of 25 years." },
    { q: "18. What warranty do you offer on solar inverters?", a: "Our smart hybrid and on-grid inverters come with a standard 5-year replacement warranty, which is extendable up to 10 years for premium enterprise accounts." },
    { q: "19. Can I run my air conditioner on solar power?", a: "Absolutely! By choosing a solar system capacity designed around your total connected load (typically 3 kW to 5 kW or higher for homes with ACs), you can power heavy appliances directly." },
    { q: "20. How does a solar water pump work?", a: "The system consists of solar arrays, a solar pump controller, and a high-efficiency DC/AC pump. The controller optimizes input power from the sun to drive the pump directly without needing batteries." },
    { q: "21. What is a solar carport?", a: "A solar carport is a dual-purpose overhead structure built to shelter parked vehicles while generating clean solar electricity. It is frequently paired with high-speed EV chargers." },
    { q: "22. How much electricity bill can I save with solar?", a: "Typically, residential clients see a massive reduction of 80% to 90% in their electricity bills. For commercial operations, it offsets high peak-rate electricity tariffs drastically." },
    { q: "23. What is the payback period for a residential solar system?", a: "Due to high utility rates and government subsidies, the typical payback period is only 3 to 4 years, after which you get completely free electricity for the remaining 20+ years." },
    { q: "24. Are there financing or EMI options available?", a: "Yes! Infinity Solar has tied up with leading public and private banks to offer low-interest solar financing loans and easy monthly installment (EMI) schemes with minimal paperwork." },
    { q: "25. How do I monitor the energy generation of my solar system?", a: "Every Infinity Solar installation comes with a built-in IoT Smart Gateway. You can track real-time power generation, battery health, and financial savings on our custom dashboard." },
    { q: "26. What happens to solar power during a grid power outage?", a: "For standard On-Grid systems, the inverter automatically shuts down for safety reasons to protect grid workers. Hybrid systems, however, decouple from the grid and continue powering your home from batteries." },
    { q: "27. Are solar panels resistant to hail and extreme weather?", a: "Yes, our solar panels are certified with high-impact tempered glass that is rigorously tested to withstand heavy winds up to 2400 Pa and hail impact up to 25mm in diameter at 80 km/h." },
    { q: "28. How does solar battery storage (like Lithium-Ion/LFP) benefit me?", a: "Lithium Iron Phosphate (LFP) batteries offer high thermal stability, up to 6000 cycles, and deep discharge capability, storing clean energy for grid blackouts." },
    { q: "29. What is a microgrid solution?", a: "A microgrid is a localized group of electricity sources and loads that normally operates connected to the grid, but can disconnect to function autonomously." },
    { q: "30. How do I apply for a site survey with Infinity Solar?", a: "You can fill out the contact or calculator form on our platform, call our direct line, or text us via WhatsApp. Our engineer will visit your property to evaluate shading and structure integrity." }
];

// Leads and Applicants Local State
let leadsState = [
    { name: "Sunil Mehta", location: "Mumbai, MH", bill: "₹12,500", status: "Survey Scheduled" },
    { name: "Rajesh Kumar", location: "Chennai, TN", bill: "₹8,000", status: "Quote Sent" }
];

let applicantsState = [
    { name: "Aarav Sharma", position: "Senior Solar PV Design Engineer", file: "aarav_resume.pdf" },
    { name: "Nisha Patel", position: "Enterprise Sales Manager", file: "nisha_cv.pdf" }
];

// Search & filter indices
let activeSearchQuery = "";
let activeCategoryFilter = "all";

// 2. APP INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    simulateSplashLoader();
    setupRouting();
    setupMobileNav();
    setupCalculators();
    setupFaqAccordions();
    setupScrollEffects();
    setupLightbox();
    setupBackToTop();

    // Renders
    switchProductTab('panels');
    renderExplorerGrid();
    setupCaseStudies();
    filterBlogs('all');
    renderCareersList();
    switchGalleryTab('all');
    renderAdminTables();
    setupFormHandlers();
});

function simulateSplashLoader() {
    const splash = document.getElementById("splash-screen");
    const progress = document.getElementById("splash-progress");
    const wrapper = document.getElementById("app-wrapper");
    let width = 0;
    
    const interval = setInterval(() => {
        width += Math.floor(Math.random() * 15) + 6;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            
            splash.style.opacity = "0";
            setTimeout(() => {
                splash.style.display = "none";
                wrapper.style.opacity = "1";
                
                // Trigger counting stats and canvas drawings
                animateCounters();
                drawLiveEnergyChart();
            }, 800);
        }
        progress.style.width = width + "%";
    }, 60);
}

// 3. SPA ROUTING
function setupRouting() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".section-container");
    
    function handleRoute() {
        const hash = window.location.hash || "#home";
        
        sections.forEach(sec => {
            // Keep specific layout dashboard overlays visible or control routing
            if ("#" + sec.id === hash) {
                sec.classList.add("active-section");
            } else {
                sec.classList.remove("active-section");
            }
        });
        
        navLinks.forEach(link => {
            if (link.getAttribute("href") === hash) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
        
        document.getElementById("app-wrapper").scrollIntoView();
        document.querySelector(".nav-links").classList.remove("expanded");
        document.querySelector(".nav-hamburger").classList.remove("open");

        // Redraw calculator projections if route changes
        if (hash === "#calculator") {
            setTimeout(runROIProjections, 200);
        }
    }
    
    window.addEventListener("hashchange", handleRoute);
    if (!window.location.hash) window.location.hash = "#home";
    else handleRoute();
}

function setupMobileNav() {
    const hamburger = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("expanded");
        hamburger.classList.toggle("open");
    });
}

// 4. SCROLL EFFECTS & DYNAMIC HIGHLIGHTS
function setupScrollEffects() {
    window.addEventListener("scroll", () => {
        // Highlight active solar journey timeline step based on vertical scrolls
        const scrollPos = window.scrollY + 300;
        const steps = document.querySelectorAll(".journey-step");
        
        steps.forEach((step, idx) => {
            const top = step.offsetTop;
            if (scrollPos > top) {
                step.style.borderColor = "var(--color-primary)";
                step.style.background = "var(--color-accent)";
            } else {
                step.style.borderColor = "var(--color-border)";
                step.style.background = "var(--glass-bg)";
            }
        });
        
        // Show back to top button
        const topBtn = document.getElementById("back-to-top");
        if (window.scrollY > 400) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });
}

function setupBackToTop() {
    const btn = document.getElementById("back-to-top");
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 5. STATS ANIMATED COUNT
function animateCounters() {
    const counters = document.querySelectorAll(".mega-stat-number");
    counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const speed = target / 50;
        
        const updateCount = () => {
            const current = +counter.innerText.replace(/[^0-9]/g, '');
            if (current < target) {
                const newVal = Math.ceil(current + speed);
                counter.innerText = newVal + (target === 98 ? "%" : target === 500 ? "MW+" : target === 10000 ? "+" : "+");
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + (target === 98 ? "%" : target === 500 ? "MW+" : target === 10000 ? "+" : "+");
            }
        };
        updateCount();
    });
}

// 6. PRODUCT SHOWCASE TABS
function switchProductTab(category) {
    const container = document.getElementById("product-list-container");
    container.innerHTML = "";
    
    const btns = document.querySelectorAll(".product-tabs .tab-btn");
    btns.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(category.substring(0, 4))) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const products = PRODUCTS_DATA[category] || [];
    products.forEach(p => {
        const specsHTML = Object.entries(p.specs).map(([lbl, val]) => `
            <tr>
                <td class="lbl">${lbl}</td>
                <td class="val">${val}</td>
            </tr>
        `).join("");

        const card = document.createElement("div");
        card.className = "product-card glass-card animate-scale";
        card.innerHTML = `
            <div class="prod-hdr">
                <h4>${p.name}</h4>
                <span class="badge">${p.badge}</span>
            </div>
            <div class="prod-img-box">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0A2540" stroke-width="1.5">
                    <path d="M3 4H21V16H3V4Z" stroke-linejoin="round"/><path d="M12 4V16 M3 10H21"/>
                </svg>
            </div>
            <table class="prod-specs">
                <tbody>${specsHTML}</tbody>
            </table>
            <div class="prod-ctas">
                <a href="#contact" class="btn btn-outline w-full text-center">Datasheet</a>
                <a href="#contact" class="btn btn-yellow w-full text-center">Enquire</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// 7. PROJECT EXPLORER & CASE ACCORDIONS
function handleProjectSearch(query) {
    activeSearchQuery = query.toLowerCase();
    renderExplorerGrid();
}

function handleProjectCatSelect(cat) {
    activeCategoryFilter = cat;
    renderExplorerGrid();
}

function renderExplorerGrid() {
    const container = document.getElementById("portfolio-list");
    container.innerHTML = "";

    const filtered = PROJECTS_DATA.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(activeSearchQuery) || p.location.toLowerCase().includes(activeSearchQuery);
        const matchesCategory = activeCategoryFilter === "all" || p.category === activeCategoryFilter;
        return matchesSearch && matchesCategory;
    });

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "portfolio-card glass-card animate-scale";
        card.innerHTML = `
            <div class="port-img" onclick="openLightbox('${p.name}', 'data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'250\\' viewBox=\\'0 0 400 250\\'><rect width=\\'400\\' height=\\'250\\' fill=\\'%23EAF4FF\\'/><circle cx=\\'200\\' cy=\\'125\\' r=\\'50\\' stroke=\\'%230A2540\\' stroke-width=\\'3\\' fill=\\'none\\'/></svg>')">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A2540" stroke-width="1.5">
                    <circle cx="12" cy="12" r="5"/><path d="M12 1v2 M12 21v2"/>
                </svg>
                <span class="zoom-indicator">🔎</span>
                <div class="port-title-overlay">${p.name}</div>
            </div>
            <table class="prod-specs">
                <tbody>
                    <tr><td class="lbl">Location:</td><td class="val">${p.location}</td></tr>
                    <tr><td class="lbl">Capacity Installed:</td><td class="val text-yellow" style="font-weight:bold;">${p.capacity}</td></tr>
                    <tr><td class="lbl">Yield Generated:</td><td class="val">${p.yield}</td></tr>
                    <tr><td class="lbl">Completion:</td><td class="val">${p.date}</td></tr>
                    <tr><td class="lbl">ROI Timeline:</td><td class="val text-green" style="font-weight:bold;">${p.ROI}</td></tr>
                </tbody>
            </table>
        `;
        container.appendChild(card);
    });
}

function setupCaseStudies() {
    const container = document.getElementById("case-studies-container");
    container.innerHTML = "";
    
    const cases = [
        { title: "Pune Warehouse Roof Refit", problem: "Commercial warehouse facing ₹2.4 Lakhs monthly diesel costs during grid dropoffs.", solution: "Integrated 150kW grid-tied bifacial solar structure with LFP micro storage backups.", results: "Electricity bill decreased by 92%. Zero diesel requirements reported.", ROI: "3.2 Years" }
    ];

    cases.forEach(c => {
        const item = document.createElement("div");
        item.className = "case-study-item";
        item.innerHTML = `
            <button class="case-study-hdr">
                <h5>${c.title} (Expand Case Study details)</h5>
                <span>🔽</span>
            </button>
            <div class="case-study-content glass-card">
                <p><strong>Problem:</strong> ${c.problem}</p>
                <p><strong>Solution:</strong> ${c.solution}</p>
                <p><strong>Results:</strong> ${c.results}</p>
                <p style="color:var(--color-success); font-weight:bold;"><strong>Estimated ROI:</strong> ${c.ROI}</p>
            </div>
        `;

        const btn = item.querySelector(".case-study-hdr");
        const content = item.querySelector(".case-study-content");
        btn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            if (isActive) {
                item.classList.remove("active");
                content.style.maxHeight = null;
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
        container.appendChild(item);
    });
}

// 8. LIVE TELEMETRY ENERGY GRAPH (CANVAS)
function drawLiveEnergyChart() {
    const canvas = document.getElementById("energy-chart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    // Clear canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    // Draw Grid Lines
    ctx.strokeStyle = "rgba(10, 37, 64, 0.06)";
    ctx.lineWidth = 1;
    for (let i = 1; i < 5; i++) {
        let y = (canvas.height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(canvas.width - 20, y);
        ctx.stroke();
    }
    
    // Chart coordinates
    const points = [
        { x: 30, y: 240 },
        { x: 100, y: 190 },
        { x: 180, y: 130 },
        { x: 260, y: 60 }, // Peak generation at noon
        { x: 340, y: 100 },
        { x: 420, y: 180 },
        { x: 500, y: 250 }
    ];
    
    // Draw Area Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(253, 184, 19, 0.35)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length-1].x, canvas.height);
    ctx.lineTo(points[0].x, canvas.height);
    ctx.closePath();
    ctx.fill();
    
    // Draw line
    ctx.strokeStyle = "var(--color-primary)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();

    // Draw axis tags
    ctx.fillStyle = "var(--color-muted)";
    ctx.font = "10px Outfit";
    ctx.fillText("08:00", 24, canvas.height - 5);
    ctx.fillText("12:00", 250, canvas.height - 5);
    ctx.fillText("18:00", 490, canvas.height - 5);
}

// 9. SOLAR ROI CALCULATORS (SAVINGS ENGINE + CANVAS PROJECTION)
function setupCalculators() {
    const billSlider = document.getElementById("monthly-bill");
    const billDisplay = document.getElementById("bill-display");
    const areaSlider = document.getElementById("roof-area");
    const areaDisplay = document.getElementById("area-display");
    const trigger = document.getElementById("calc-trigger");

    billSlider.addEventListener("input", (e) => {
        billDisplay.innerText = "₹" + (+e.target.value).toLocaleString('en-IN');
    });

    areaSlider.addEventListener("input", (e) => {
        areaDisplay.innerText = (+e.target.value) + " sq.ft";
    });

    trigger.addEventListener("click", runROIProjections);
    runROIProjections(); // initial load

    // Subsidy Estimator slider
    const subSlider = document.getElementById("subsidy-capacity");
    const subCapDisplay = document.getElementById("subsidy-cap-display");
    subSlider.addEventListener("input", (e) => {
        const val = +e.target.value;
        subCapDisplay.innerText = val.toFixed(1) + " kW";
        
        let subsidy = 0;
        if (val === 1) subsidy = 30000;
        else if (val === 2) subsidy = 60000;
        else subsidy = 78000;

        const estCost = val * 60000;
        const netCost = estCost - subsidy;

        document.getElementById("subsidy-amt-val").innerText = "₹" + subsidy.toLocaleString('en-IN');
        document.getElementById("subsidy-net-cost").innerText = "₹" + netCost.toLocaleString('en-IN');
    });
}

function runROIProjections() {
    const bill = +document.getElementById("monthly-bill").value;
    const area = +document.getElementById("roof-area").value;
    
    // Math logic
    const proposedCapByBill = bill / 1600;
    const proposedCapByArea = area / 100;
    const capacity = Math.max(1, +Math.min(proposedCapByBill, proposedCapByArea).toFixed(1));
    
    const investment = +(capacity * 45000 / 100000).toFixed(2);
    const monthlySavings = Math.floor(bill * 0.90);
    const annualSavings = monthlySavings * 12;
    const payback = +(investment * 100000 / annualSavings).toFixed(1);
    const lifetimeProfit = +(annualSavings * 25 / 100000).toFixed(1);

    // Bind text fields
    document.getElementById("calc-capacity").innerText = capacity.toFixed(1) + " kW System";
    document.getElementById("calc-investment").innerText = "₹" + investment + " Lakhs";
    document.getElementById("calc-payback").innerText = payback + " Years";
    document.getElementById("calc-monthly-savings").innerText = "₹" + monthlySavings.toLocaleString('en-IN');
    document.getElementById("calc-lifetime-savings").innerText = "₹" + lifetimeProfit + " Lakhs";

    // Draw projections chart
    drawRoiProjectionsChart(investment * 100000, annualSavings);
}

function drawRoiProjectionsChart(investmentVal, annualSavingsVal) {
    const canvas = document.getElementById("roi-chart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = "rgba(10, 37, 64, 0.05)";
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
        let y = (canvas.height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(canvas.width - 20, y);
        ctx.stroke();
    }

    // Coordinates points
    // We plot Years 0 to 10
    const paddingLeft = 40;
    const widthActive = canvas.width - 60;
    const heightActive = canvas.height - 40;
    
    const pointsCost = [];
    const pointsSavings = [];

    for (let yr = 0; yr <= 10; yr++) {
        let x = paddingLeft + (widthActive / 10) * yr;
        
        // Cost line is constant (Initial Investment)
        let costY = (canvas.height - 30) - (investmentVal / 1000000) * heightActive;
        pointsCost.push({ x: x, y: costY });
        
        // Savings line starts at 0 and goes up
        let cumulativeSavings = annualSavingsVal * yr;
        let savingsY = (canvas.height - 30) - (cumulativeSavings / 1000000) * heightActive;
        pointsSavings.push({ x: x, y: savingsY });
    }

    // Draw Cost Line (Navy stroke)
    ctx.strokeStyle = "#94A3B8";
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(pointsCost[0].x, pointsCost[0].y);
    for(let i=1; i<pointsCost.length; i++) ctx.lineTo(pointsCost[i].x, pointsCost[i].y);
    ctx.stroke();
    ctx.setLineDash([]); // Reset

    // Draw Savings Line (Green stroke)
    ctx.strokeStyle = "var(--color-success)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(pointsSavings[0].x, pointsSavings[0].y);
    for(let i=1; i<pointsSavings.length; i++) ctx.lineTo(pointsSavings[i].x, pointsSavings[i].y);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = "var(--color-muted)";
    ctx.font = "9px Outfit";
    ctx.fillText("Year 0", 30, canvas.height - 5);
    ctx.fillText("Year 5", paddingLeft + widthActive/2 - 10, canvas.height - 5);
    ctx.fillText("Year 10", canvas.width - 45, canvas.height - 5);
}

// 10. MEDIA GALLERY & MODAL LIGHTBOX
function switchGalleryTab(category) {
    const container = document.getElementById("media-grid-container");
    container.innerHTML = "";
    
    const tabs = document.querySelectorAll(".gallery-tabs .gallery-tab");
    tabs.forEach(t => {
        if (t.innerText.toLowerCase().includes(category.substring(0, 4))) t.classList.add("active");
        else t.classList.remove("active");
    });

    const filtered = category === 'all'
        ? MEDIA_GALLERY_DATA
        : MEDIA_GALLERY_DATA.filter(m => m.category === category);

    filtered.forEach(m => {
        const card = document.createElement("div");
        card.className = "media-card glass-card animate-scale";
        card.innerHTML = `
            <div class="media-box" onclick="openLightbox('${m.title}', '${m.url}')">
                <img src="${m.url}" alt="${m.title}">
                <span class="zoom-indicator">🔎</span>
            </div>
            <span class="media-lbl text-center">${m.title}</span>
        `;
        container.appendChild(card);
    });
}

function openLightbox(title, imgUrl) {
    const modal = document.getElementById("gallery-lightbox");
    const modalImg = document.getElementById("lightbox-img");
    modal.style.display = "flex";
    modalImg.src = imgUrl;
}

function closeLightbox() {
    document.getElementById("gallery-lightbox").style.display = "none";
}

// 11. EDUCATION BLOG REDIRECTS
function filterBlogs(category) {
    const container = document.getElementById("blogs-grid-container");
    container.innerHTML = "";
    
    const btns = document.querySelectorAll(".blog-categories .blog-cat-btn");
    btns.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(category.substring(0, 4))) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const filtered = category === 'all'
        ? BLOGS_DATA
        : BLOGS_DATA.filter(b => b.category === category);

    filtered.forEach(b => {
        const card = document.createElement("div");
        card.className = "blog-item-card glass-card animate-fade";
        card.innerHTML = `
            <span class="cat-badge">${b.category.toUpperCase()}</span>
            <h4>${b.title}</h4>
            <p>${b.desc}</p>
            <div class="blog-item-meta">
                <span style="font-size:0.75rem; color:var(--color-muted);">${b.read}</span>
                <a href="#contact" class="blog-read-link">Read &rarr;</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// 12. CAREER VACANCIES LISTING
function renderCareersList() {
    const container = document.getElementById("job-listings-container");
    container.innerHTML = "";
    
    CAREERS_DATA.forEach(j => {
        const card = document.createElement("div");
        card.className = "job-role-card glass-card animate-slide-up";
        card.innerHTML = `
            <div class="job-hdr">
                <h4>${j.title}</h4>
                <span class="badge">${j.loc}</span>
            </div>
            <div class="job-meta-line">Department: ${j.dept} • Exp: ${j.exp} • Full-Time</div>
            <p class="job-desc">${j.desc}</p>
        `;
        container.appendChild(card);
    });
}

// 13. FAQ ACCORDION RENDER (30 Entries)
function setupFaqAccordions() {
    const faqContainer = document.getElementById("faq-accordions-list");
    faqContainer.innerHTML = "";
    
    FAQ_LIST.forEach((faq, index) => {
        const item = document.createElement("div");
        item.className = "faq-accordion-item glass-card";
        item.innerHTML = `
            <button class="faq-accordion-hdr">
                <h5>${faq.q}</h5>
                <svg class="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div class="faq-accordion-content">
                <p>${faq.a}</p>
            </div>
        `;
        
        const btn = item.querySelector(".faq-accordion-hdr");
        const content = item.querySelector(".faq-accordion-content");
        
        btn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            
            document.querySelectorAll(".faq-accordion-item").forEach(other => {
                other.classList.remove("active");
                other.querySelector(".faq-accordion-content").style.maxHeight = null;
            });
            
            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
        
        faqContainer.appendChild(item);
    });
}

// 14. LEAD CAPTURE CONTACT CRM STATE BINDINGS
function setupFormHandlers() {
    const leadForm = document.getElementById("lead-capture-form");
    leadForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("lead-name").value;
        const location = document.getElementById("lead-location").value;
        const billVal = +document.getElementById("lead-bill").value;
        
        // Push into CRM database
        leadsState.unshift({
            name: name,
            location: location,
            bill: "₹" + billVal.toLocaleString('en-IN'),
            status: "New Lead"
        });
        
        renderAdminTables();
        
        // Increase traffic stat counter slightly
        const trafficDisplay = document.getElementById("admin-traffic");
        trafficDisplay.innerText = (+trafficDisplay.innerText.replace(/[^0-9]/g, '') + 1).toLocaleString('en-IN');

        alert("Thank you " + name + "! Your direct inquiry has been registered. The CRM leads table on the Admin panel has been updated.");
        leadForm.reset();
    });

    const jobForm = document.getElementById("job-apply-form");
    const resumeDropzone = document.getElementById("resume-drag");
    
    resumeDropzone.addEventListener("click", () => {
        document.getElementById("resume-file").click();
    });

    jobForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("apply-name").value;
        const selectPos = document.getElementById("apply-position");
        const position = selectPos.options[selectPos.selectedIndex].text.split(" (")[0];

        applicantsState.unshift({
            name: name,
            position: position,
            file: "resume_" + name.toLowerCase().replace(" ", "_") + ".pdf"
        });

        renderAdminTables();
        alert("Application submitted! Thank you " + name + ", candidates directory is updated.");
        jobForm.reset();
    });

    const newsletterForm = document.getElementById("newsletter-form");
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("news-email").value;
        alert("Thank you! " + email + " registered for monthly newsletter bulletins.");
        newsletterForm.reset();
    });
}

function renderAdminTables() {
    const leadsTable = document.getElementById("admin-leads-table");
    leadsTable.innerHTML = "";
    leadsState.forEach(lead => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${lead.name}</strong></td>
            <td>${lead.location}</td>
            <td>${lead.bill}</td>
            <td><span class="badge" style="background:${lead.status === 'New Lead' ? 'rgba(253, 184, 19, 0.1)' : 'rgba(46, 204, 113, 0.1)'}; color:${lead.status === 'New Lead' ? 'var(--color-primary)' : 'var(--color-success)'}">${lead.status}</span></td>
        `;
        leadsTable.appendChild(tr);
    });

    const appTable = document.getElementById("admin-applicants-table");
    appTable.innerHTML = "";
    document.getElementById("applicants-count-badge").innerText = applicantsState.length + " Candidates";
    applicantsState.forEach(app => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${app.name}</strong></td>
            <td>${app.position}</td>
            <td><a href="#" style="color:var(--color-secondary); text-decoration:none;" onclick="alert('Downloading attachment: ${app.file}'); return false;">📄 ${app.file}</a></td>
            <td><button class="admin-action-btn" onclick="alert('Interview Scheduled for ${app.name}')">Schedule</button></td>
        `;
        appTable.appendChild(tr);
    });
}
