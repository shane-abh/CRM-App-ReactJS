import TicketCard from "../components/TicketCard";

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Videos',
            onwer: 'Shane Abraham',
            avatar: 'https://greatdubai.com/sell-car-rentals/wp-content/uploads/sites/4/2022/05/SONATA-hero-option1-764A5360-edit-640x354-1.jpg',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Detailed video for NFT',
            timestamp: '2022-07-11T10:17:49+00:00'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Videos',
            onwer: 'Shane Abraham',
            avatar: 'https://greatdubai.com/sell-car-rentals/wp-content/uploads/sites/4/2022/05/SONATA-hero-option1-764A5360-edit-640x354-1.jpg',
            status: 'done',
            priority: 2,
            progress: 80,
            description: 'Detailed video for NFT1',
            timestamp: '2022-08-11T10:17:49+00:00'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'NFT Videos',
            onwer: 'Shane Abraham',
            avatar: '',
            status: 'done',
            priority: 3,
            progress: 20,
            description: 'Detailed video for watch',
            timestamp: '2022-08-11T10:17:49+00:00'
        }
    ];


    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'

    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category})=> category))
    ]


    console.log(uniqueCategories);
    return(
        <div className="dashboard">
            <h1>My Project</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory,categoryIndex)=>
                (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket=> ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) =>(
                                <TicketCard
                                    id = {_index}
                                    color = {colors[categoryIndex] || colors[0]}
                                    ticket = {filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;