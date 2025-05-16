export interface Event {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    startDate: string;
    endDate: string;
}

export const mockEvents: Record<string, Event[]> = {
    "1": [
        {
            id: "1",
            title: "每日5公里跑步挑战",
            description: "每天完成5公里跑步，提升心肺功能，增强体质。",
            imageUrl:
                "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
        {
            id: "2",
            title: "周末长跑挑战",
            description: "每个周末完成一次10公里长跑，培养耐力。",
            imageUrl:
                "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
    ],
    "2": [
        {
            id: "3",
            title: "每日编程挑战",
            description: "每天完成一道算法题，提升编程能力。",
            imageUrl:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
        {
            id: "4",
            title: "项目实战挑战",
            description: "完成一个完整的项目开发，包括前端和后端。",
            imageUrl:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
    ],
    "3": [
        {
            id: "5",
            title: "每月读书挑战",
            description: "每月读完一本书，并写下读书笔记。",
            imageUrl:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
        {
            id: "6",
            title: "读书分享会",
            description: "参加读书分享会，分享自己的读书心得。",
            imageUrl:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
    ],
    "4": [
        {
            id: "7",
            title: "在家挥拍100次挑战",
            description: "每天在家完成100次网球挥拍练习，提升基本功。",
            imageUrl:
                "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
        {
            id: "8",
            title: "与教练比赛挑战",
            description: "与专业教练进行一场正式比赛，检验训练成果。",
            imageUrl:
                "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            startDate: "2024-03-01",
            endDate: "2024-03-31",
        },
    ],
};
