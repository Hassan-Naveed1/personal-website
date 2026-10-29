
const activities = [
    {
        activity: "Polishing and testing my personal portfolio locally before publication. Reviewing the layout, navigation, project descriptions, and contact functionality.",
        dateAdded: "2026-10-29"
    },
    {
        activity: "Building a dedicated Development Log page to document my ongoing learning and development.",
        dateAdded: "2026-10-29"
    }
];

const activityList = document.querySelector("#development-log-list");

if (activityList) {
    activityList.innerHTML = activities
        .map((item) => `
            <tr>
                <td>${item.activity}</td>
                <td>
                    <time datetime="${item.dateAdded}">
                        ${new Date(`${item.dateAdded}T12:00:00`).toLocaleDateString(
                            "en-GB",
                            {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                timeZone: "UTC"
                            }
                        )}
                    </time>
                </td>
            </tr>
        `)
        .join("");
}
