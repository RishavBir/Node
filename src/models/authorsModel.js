                                           

                                         //  W3D3 Assignment



// const mongoose = require ('mongoose')
// const authorSchema = new mongoose.Schema({

//     author_id : {
//             type:Number,
            
//                 },

//                 author_name: String,
//                 age : Number,
//                 address: String
// },
//     {timestamps: true})


//     module.exports = mongoose.model ('Author', authorSchema)  // users





                                      // W3D4 Assignment




  const mongoose = require ('mongoose')
  const authorSchema = new mongoose.Schema ({

    authorName : String,
    age: Number,
    address: String,
    rating: Number,
  },
    { timestamps:true})

    module.exports = mongoose.model( 'Author', authorSchema)

