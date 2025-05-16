export interface Comment {
    id: string;
    eventId: string;
    userId: string;
    userName: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
}

export const mockComments: Comment[] = [
    {
        id: "1",
        eventId: "1",
        userId: "user1",
        userName: "张三",
        content: "今天完成了5公里跑步，感觉状态不错！",
        imageUrl:
            "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-15T08:30:00Z",
    },
    {
        id: "2",
        eventId: "1",
        userId: "user2",
        userName: "李四",
        content: "坚持跑步第30天，体重已经减了5kg！",
        imageUrl:
            "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-14T18:45:00Z",
    },
    {
        id: "3",
        eventId: "3",
        userId: "user3",
        userName: "王五",
        content: "今天完成了三道算法题，收获很大！",
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-15T10:20:00Z",
    },
    {
        id: "4",
        eventId: "5",
        userId: "user4",
        userName: "赵六",
        content: "本月第三本书《深入理解计算机系统》读完，收获颇丰！",
        imageUrl:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-13T20:15:00Z",
    },
    // 在家挥拍100次挑战的评论
    {
        id: "5",
        eventId: "7",
        userId: "user5",
        userName: "网球新手",
        content: "第一天完成100次挥拍，手臂有点酸，但感觉动作越来越标准了！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-15T09:00:00Z",
    },
    {
        id: "6",
        eventId: "7",
        userId: "user6",
        userName: "网球爱好者",
        content: "坚持一周了，感觉挥拍动作流畅了很多，继续加油！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-14T20:30:00Z",
    },
    {
        id: "7",
        eventId: "7",
        userId: "user7",
        userName: "网球达人",
        content: "每天100次挥拍，配合视频教程，进步很快！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-13T19:15:00Z",
    },
    {
        id: "8",
        eventId: "7",
        userId: "user8",
        userName: "网球教练",
        content: "建议大家在挥拍时注意手腕的发力，保持动作的连贯性。",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-12T16:45:00Z",
    },
    {
        id: "9",
        eventId: "7",
        userId: "user9",
        userName: "网球新手2",
        content: "今天第一次尝试，虽然有点累，但很有成就感！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-11T21:00:00Z",
    },
    // 与教练比赛挑战的评论
    {
        id: "10",
        eventId: "8",
        userId: "user10",
        userName: "网球高手",
        content: "今天和教练打了一场，虽然输了，但学到了很多技巧！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-15T15:30:00Z",
    },
    {
        id: "11",
        eventId: "8",
        userId: "user11",
        userName: "网球爱好者2",
        content: "教练的球路变化很多，让我大开眼界！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-14T17:20:00Z",
    },
    {
        id: "12",
        eventId: "8",
        userId: "user12",
        userName: "网球新手3",
        content: "第一次和教练比赛，紧张得手都在抖，但收获很大！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-13T14:45:00Z",
    },
    {
        id: "13",
        eventId: "8",
        userId: "user13",
        userName: "网球达人2",
        content: "教练指出了我很多需要改进的地方，受益匪浅！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-12T16:30:00Z",
    },
    {
        id: "14",
        eventId: "8",
        userId: "user14",
        userName: "网球教练2",
        content: "很高兴看到大家的进步，继续加油！",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        createdAt: "2024-03-11T18:15:00Z",
    },
];
