export interface Group {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export const mockGroups: Group[] = [
    {
        id: "1",
        name: "每日跑步挑战",
        description: "加入我们的跑步挑战小组，每天坚持跑步，提升健康水平。",
        imageUrl:
            "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
        id: "2",
        name: "编程学习挑战",
        description: "每天一道编程题，提升编程技能，培养解决问题的能力。",
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
        id: "3",
        name: "阅读挑战",
        description: "每月一本书，培养阅读习惯，拓展知识面。",
        imageUrl:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
        id: "4",
        name: "网球挑战",
        description: "从基础挥拍到实战比赛，全面提升网球技能。",
        imageUrl:
            "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
];
