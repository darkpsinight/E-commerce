export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "1mail@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "2mail@gmail.com",
        status: "passive",
        age: 32,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/2058659/pexels-photo-2058659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "3mail@gmail.com",
        status: "pending",
        age: 35,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "4mail@gmail.com",
        status: "active",
        age: 26,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "5mail@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "6mail@gmail.com",
        status: "active",
        age: 25,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "7mail@gmail.com",
        status: "passive",
        age: 24,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "8mail@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Francklin",
        img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "9mail@gmail.com",
        status: "pending",
        age: 35,
    },
    {
        id: 10,
        username: "Ericson",
        img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "10mail@gmail.com",
        status: "active",
        age: 27,
    },
    {
        id: 11,
        username: "Ava",
        img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "11mail@gmail.com",
        status: "active",
        age: 30,
    },
    {
        id: 12,
        username: "Ghalen",
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "12mail@gmail.com",
        status: "passive",
        age: 32,
    },
    {
        id: 13,
        username: "Grady",
        img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "13mail@gmail.com",
        status: "pending",
        age: 31,
    },
    {
        id: 14,
        username: "Izaak",
        img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "14mail@gmail.com",
        status: "passive",
        age: 27,
    },
    {
        id: 15,
        username: "Ahmed",
        img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "15mail@gmail.com",
        status: "passive",
        age: 36,
    },
    {
        id: 16,
        username: "Mark",
        img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "16mail@gmail.com",
        status: "active",
        age: 27,
    },
    {
        id: 17,
        username: "Sarah",
        img: "https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "17mail@gmail.com",
        status: "passive",
        age: 26,
    },
    {
        id: 18,
        username: "Khan",
        img: "https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "18mail@gmail.com",
        status: "pending",
        age: 23,
    },
    {
        id: 19,
        username: "Mark",
        img: "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "19mail@gmail.com",
        status: "passive",
        age: 21,
    },
    {
        id: 20,
        username: "Asma",
        img: "https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "20mail@gmail.com",
        status: "passive",
        age: 18,
    },
];