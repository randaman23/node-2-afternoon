module.exports = {

    create: (req, res, next)=> {
    const dbInstance= req.app.get('dbInstance')
    const {name, description, price, image_url} = req.body

    dbInstance.create_product([name,description,price,image_url])
    .then(()=>res.sendStatus(200))
    .catch(err =>{
        res.status(500).send({errorMessage: 'Something went wrong! Our engineers will get on it.'})
    console.log(err)
    })
    },

    getOne: (req, res, next)=>{
        const dbInstance = req.app.get('dbInstance')
        const {params} = req
        dbInstance.read_product(params.id)
        .then((products)=>res.status(200).send(products))
        .catch(err => {res.status(500).send({errorMessage:'Something went wrong! Our engineers will get on it.'})})
    },

    getAll: (req, res, next)=>{
        const dbInstance= req.app.get('dbInstance')
        dbInstance.read_products()
        .then((products)=> res.status(200).send(products))
        .catch(err => {res.status(500).send({errorMessage:'Something went wrong! Our engineers will get on it.'})
        console.log(err)})
    },

    update: (req,res, next)=>{
        const dbInstance = req.app.get('dbInstance')
        const {params, query} = req
        dbInstance.update_product([params.id, query.desc])
        .then(()=>res.status(200).send())
        .catch(err => {res.status(500).send({errorMessage:'Something went wrong! Our engineers will get on it.'})
        console.log(err)})
    },  
    
    delete: (req,res, next)=>{
        const dbInstance= req.app.get('dbInstance')
        const{params} = req
        dbInstance.delete_product(params.id)
        .then(()=> res.status(200).send())
        .catch(err => {res.status(500).send({errorMessage:'Something went wrong! Our engineers will get on it.'})
        console.log(err)})
    }

}