const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const schema = mongoose.Schema;

const CarSchema = new schema({
    model:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:String,
        default: Date.now
    }
});
CarSchema.plugin(mongoosePaginate);
mongoose.model("cars", CarSchema);