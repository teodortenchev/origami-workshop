const getNavigation = (loggedIn, user) => {
    
    const authLinks = [
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
            link: `/profile/${user && user.id}`
        },
        {
            title: "Logout",
            link: "/logout"
        }
    ];

     
    const guestLinks = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Log In",
            link: "/login"
        }
    ];

    return loggedIn ? authLinks : guestLinks;
}

export default getNavigation;
