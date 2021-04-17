const projects = [
        {
            "id": 1,
            "name": "Into the Wild",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "Draft",
            "poster": "intothewild.png",
            "stakeholders": [
                {
                    "id": 1,
                    "firstName": "John",
                    "lastName": "Doe",
                    "role": "owner",
                    "profilePicture": "john.png",
                    "active": false,
                    "share": 0
                },
                {
                    "id": 2,
                    "firstName": "Emile",
                    "lastName": "Hirsch",
                    "role": "distributor",
                    "profilePicture": "emile.png",
                    "active": false,
                    "share": 0
                },
                {
                    "id": 3,
                    "firstName": "Catherine",
                    "lastName": "Keener",
                    "role": "Investor",
                    "profilePicture": "catherine.png",
                    "active": false,
                    "share": 0
                },
                {
                    "id": 4,
                    "firstName": "Vince",
                    "lastName": "Vaughn",
                    "role": "Crew",
                    "profilePicture": "vince.png",
                    "active": false,
                    "share": 0
                }
            ],
            "tiers": []
            
        },
        {
            "id": 2,
            "name": "The Big Year",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "draft",
            "poster": "thebigyear.png",
            "totalTargetRevenue": 400000,
            "totalReceivedRevenue": 0,
            "stakeholders": [
                {
                    "id": 1,
                    "firstName": "John",
                    "lastName": "Doe",
                    "role": "owner",
                    "profilePicture": "john.png",
                    "active": true,
                    "share": 25,
                    "totalTargetRevenue": 100000,
                    "totalReceivedRevenue": 0
                },
                {
                    "id": 2,
                    "firstName": "Emile",
                    "lastName": "Hirsch",
                    "role": "distributor",
                    "profilePicture": "emile.png",
                    "active": true,
                    "share": 35,
                    "totalTargetRevenue": 100000,
                    "totalReceivedRevenue": 0
                },
                {
                    "id": 3,
                    "firstName": "Catherine",
                    "lastName": "Keener",
                    "role": "Investor",
                    "profilePicture": "catherine.png",
                    "active": false,
                    "share": 0,
                    "totalTargetRevenue": 0,
                    "totalReceivedRevenue": 0
                },
                {
                    "id": 4,
                    "firstName": "Vince",
                    "lastName": "Vaughn",
                    "role": "Crew",
                    "profilePicture": "vince.png",
                    "active": true,
                    "share": 40,
                    "totalTargetRevenue": 100000,
                    "totalReceivedRevenue": 0
                }
            ],
            "tiers": [
                {
                    "id": 1,
                    "name": "Tier 1",
                    "targetRevenue": 100000,
                    "receivedRevenue": 0,
                    "status": "pending",
                    "stakeholders": [
                        {
                            "id": 1,
                            "firstName": "John",
                            "lastName": "Doe",
                            "role": "owner",
                            "profilePicture": "john.png",
                            "share": 25,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        },
                        {
                            "id": 2,
                            "firstName": "Emile",
                            "lastName": "Hirsch",
                            "role": "distributor",
                            "profilePicture": "emile.png",
                            "active": false,
                            "share": 75,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Tier 2",
                    "targetRevenue": 200000,
                    "receivedRevenue": 0,
                    "status": "pending",
                    "stakeholders": [
                        {
                            "id": 1,
                            "firstName": "John",
                            "lastName": "Doe",
                            "role": "owner",
                            "profilePicture": "john.png",
                            "share": 25,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        },
                        {
                            "id": 2,
                            "firstName": "Emile",
                            "lastName": "Hirsch",
                            "role": "distributor",
                            "profilePicture": "emile.png",
                            "active": false,
                            "share": 75,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Tier 3",
                    "targetRevenue": 100000,
                    "receivedRevenue": 0,
                    "status": "pending",
                    "stakeholders": [
                        {
                            "id": 1,
                            "firstName": "John",
                            "lastName": "Doe",
                            "role": "owner",
                            "profilePicture": "john.png",
                            "share": 25,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        },
                        {
                            "id": 2,
                            "firstName": "Emile",
                            "lastName": "Hirsch",
                            "role": "distributor",
                            "profilePicture": "emile.png",
                            "active": false,
                            "share": 75,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        }
                    ]
                }
            ]
            
        },
        {
            "id": 3,
            "name": "We Bought a Zoo",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "Generating Revenue",
            "poster": "weboughtazoo.png",
            "totalTargetRevenue": 400000,
            "totalReceivedRevenu": 200000,
            "stakeholders": [
                {
                    "id": 1,
                    "firstName": "John",
                    "lastName": "Doe",
                    "role": "owner",
                    "profilePicture": "john.png",
                    "active": true,
                    "share": 25,
                    "totalTargetRevenue": 100000,
                    "totalReceivedRevenue": 50000
                },
                {
                    "id": 2,
                    "firstName": "Emile",
                    "lastName": "Hirsch",
                    "role": "distributor",
                    "profilePicture": "emile.png",
                    "active": true,
                    "share": 35,
                    "totalTargetRevenue": 100000,
                    "totalReceivedRevenue": 50000
                },
                {
                    "id": 3,
                    "firstName": "Catherine",
                    "lastName": "Keener",
                    "role": "Investor",
                    "profilePicture": "catherine.png",
                    "active": false,
                    "share": 0,
                    "totalTargetRevenue": 0,
                    "totalReceivedRevenue": 0
                },
                {
                    "id": 4,
                    "firstName": "Vince",
                    "lastName": "Vaughn",
                    "role": "Crew",
                    "profilePicture": "vince.png",
                    "active": true,
                    "share": 40,
                    "totalTargetRevenue": 100000,
                    "totalReceivedRevenue": 50000
                }
            ],
            "tiers": [
                {
                    "id": 1,
                    "name": "Tier 1",
                    "targetRevenue": 100000,
                    "receivedRevenue": 100000,
                    "status": "completed",
                    "stakeholders": [
                        {
                            "id": 1,
                            "firstName": "John",
                            "lastName": "Doe",
                            "role": "owner",
                            "profilePicture": "john.png",
                            "share": 25,
                            "targetRevenue": 100000,
                            "receivedRevenue": 100000
                        },
                        {
                            "id": 2,
                            "firstName": "Emile",
                            "lastName": "Hirsch",
                            "role": "distributor",
                            "profilePicture": "emile.png",
                            "active": false,
                            "share": 75,
                            "targetRevenue": 100000,
                            "receivedRevenue": 100000
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Tier 2",
                    "targetRevenue": 200000,
                    "receivedRevenue": 100000,
                    "status": "active",
                    "stakeholders": [
                        {
                            "id": 1,
                            "firstName": "John",
                            "lastName": "Doe",
                            "role": "owner",
                            "profilePicture": "john.png",
                            "share": 25,
                            "targetRevenue": 100000,
                            "receivedRevenue": 25000
                        },
                        {
                            "id": 2,
                            "firstName": "Emile",
                            "lastName": "Hirsch",
                            "role": "distributor",
                            "profilePicture": "emile.png",
                            "active": false,
                            "share": 75,
                            "targetRevenue": 100000,
                            "receivedRevenue": 25000
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Tier 3",
                    "targetRevenue": 100000,
                    "receivedRevenue": 0,
                    "status": "pending",
                    "stakeholders": [
                        {
                            "id": 1,
                            "firstName": "John",
                            "lastName": "Doe",
                            "role": "owner",
                            "profilePicture": "john.png",
                            "share": 25,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        },
                        {
                            "id": 2,
                            "firstName": "Emile",
                            "lastName": "Hirsch",
                            "role": "distributor",
                            "profilePicture": "emile.png",
                            "active": false,
                            "share": 75,
                            "targetRevenue": 100000,
                            "receivedRevenue": 0
                        }
                    ]
                }
            ]
            
        },
        {
            "id": 4,
            "name": "One Week",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "Generating Revenue",
            "poster": "oneweek.png"
        },
        {
            "id": 5,
            "name": "The Revenent",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "Generating Revenue",
            "poster": "therevenent.png"
        },
        {
            "id": 6,
            "name": "Life of Pi",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "Finished",
            "poster": "lifeofpi.png"
        },
        {
            "id": 7,
            "name": "The Beach",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "Finished",
            "poster": "thebeach.png"
        },
        {
            "id": 8,
            "name": "Les Miserables",
            "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
            "status": "Finished",
            "poster": "lesmiserables.png"
        }
    ]

    const requests = [
        {
            projectId: 1,
            status: 'pending'
        },
        {
            projectId: 2,
            status: 'pending'
        },
        {
            projectId: 3,
            status: 'pending'
        },
        {
            projectId: 4,
            status: 'accepted'
        },
        {
            projectId: 5,
            status: 'accepted'
        },
        {
            projectId: 6,
            status: 'accepted'
        }
    ]

    export default {
        projects: projects,
        requests: requests
    }