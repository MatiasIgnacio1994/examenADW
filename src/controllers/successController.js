const successPage = (req, res) => {
    res.render('pages/success', {
        cont: 'Logout',
        ruta: '/Logout'
    });
}

export { successPage };