export default asyncRouterMap = [
    {
        path: '/home',
        name: 'Home',
        component: () => {
            import('@/components/HelloWorld')
        }
    }
]