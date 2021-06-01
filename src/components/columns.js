export const COLUMNS = [
    {
        Header: "First Name",
        Footer: "First Name",
        accessor: 'first_name'
    },
    {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
    },
    {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth"
    },
    {
        Header: "Email",
        Footer: "Email",
        accessor: "email"
    },
    {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: "Name",
        Footer: "Name",
        columns: [
            {
                Header: "First Name",
                Footer: "First Name",
                accessor: 'name.first'
            },
            {
                Header: "Last Name",
                Footer: "Last Name",
                accessor: "name.last"
            },
        ]
    },
    {
        Header: "Info",
        Footer: "Info",
        columns: [
            {
                Header: "Date of Birth",
                Footer: "Date of Birth",
                accessor: "dob"
            },
            {
                Header: "Country",
                Footer: "Country",
                accessor: "location.country"
            },
            {
                Header: "Phone",
                Footer: "Phone",
                accessor: "phone"
            },
        ]
    }
]