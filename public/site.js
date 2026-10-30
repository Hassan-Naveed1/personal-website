"use strict";
const portfolioProjects = [
    {
        name: "Gym CRM & Marketing Analytics Platform",
        description: "Developed a modular Flask CRM and marketing analytics platform for a gym business. Integrated advertising and analytics data into dashboards, connected Wix forms for automated lead capture, and implemented Twilio WhatsApp workflows for trial bookings, reminders, and follow-up feedback. Also configured and managed AWS EC2 deployment.",
        technologies: [
            "Python",
            "Flask",
            "SQLite",
            "REST APIs",
            "Chart.js",
            "Twilio",
            "AWS EC2"
        ]
    },
    {
        name: "E-commerce Payment System",
        description: "Built a Django e-commerce application with user accounts, product pages, a shopping cart, and checkout functionality. Integrated Stripe payment processing with webhook confirmations and designed validated data models for products, orders, and payments.",
        technologies: [
            "Python",
            "Django",
            "Stripe",
            "Bootstrap"
        ]
    },
    {
        name: "News Classification System",
        description: "Developed a machine learning application using the AG News dataset to classify news articles into World, Sports, Business, and Sci/Tech categories. Applied TF-IDF vectorisation and a Multinomial Naive Bayes classifier, evaluating model performance with accuracy, precision, recall, F1-score, and visualisations.",
        technologies: [
            "Python",
            "scikit-learn",
            "TF-IDF",
            "Machine Learning"
        ]
    },
    {
        name: "UK Used-Car Market Analysis",
        description: "Currently in progress. Analysing approximately 480,000 UK used-car listings using Python and Pandas. Conducted data quality investigations and exploratory data analysis to identify patterns in advertised prices, mileage, fuel types, and vehicle registration years. Developing statistical visualisations to communicate market insights and trends.",
        technologies: [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Data Analysis",
            "Git",
            "GitHub"
        ],
        githubUrl: "https://github.com/Hassan-Naveed1/uk-used-car-market-analysis"
    }
];
const projectList = document.querySelector("#project-list");
if (projectList) {
    projectList.innerHTML = portfolioProjects.map((project) => `
        <article class="project-card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>

            <p class="project-tech">
                ${project.technologies.join(" · ")}
            </p>

            ${project.githubUrl ? `
                <a
                    class="project-link"
                    href="${project.githubUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub ↗
                </a>
            ` : ""}
        </article>
    `).join("");
}
const developmentUpdates = [
    {
        date: "2026-10-29",
        title: "Building my personal portfolio",
        description: "I'm developing my portfolio to document my progress, present my work, and create a professional space that reflects my commitment to becoming a software engineer.",
        tags: ["Personal Development", "TypeScript", "Web Development"]
    }
];
const developmentLog = document.querySelector("#development-log-list");
if (developmentLog) {
    developmentLog.innerHTML = developmentUpdates
        .map((update) => `
            <article class="log-entry">
                <div class="log-entry-content">
                    <h3>${update.title}</h3>
                    <p>${update.description}</p>

                    <div class="log-tags">
                        ${update.tags
        .map((tag) => `<span class="log-tag">${tag}</span>`)
        .join("")}
                    </div>
                </div>

                <time class="log-date" datetime="${update.date}">
                    ${new Date(`${update.date}T12:00:00`).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
    })}
                </time>
            </article>
        `)
        .join("");
}
const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
if (menuToggle && primaryNavigation) {
    const closeMenu = () => {
        primaryNavigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    };
    menuToggle.addEventListener("click", () => {
        const isOpen = primaryNavigation.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
    primaryNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
    document.addEventListener("click", (event) => {
        if (!primaryNavigation.contains(event.target) &&
            !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });
}
