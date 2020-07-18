const getNavigation = (userId) => {
    
    const links = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Post",
            link: "/post"
        },
        {
            title: "Profile",
            link: `/profile/${userId}`
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Log In",
            link: "/"
        },
        {
            title: "Logout",
            link: "/logout"
        }
    ];

    return links;
}


export default getNavigation;