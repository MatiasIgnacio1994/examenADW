const cancelPage = (req, res) => {
    res.render('pages/cancel', {
        cont: 'Logout',
        ruta: '/Logout'
    });
}

export { cancelPage };