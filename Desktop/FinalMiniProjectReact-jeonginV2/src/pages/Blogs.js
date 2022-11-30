import '../App.css';

var array = [];

for(let i = 0 ; i < 6;i++){
    array.push(           
     <div class="card col-sm-12 col-md-6 col-lg-4">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-secondary">Go somewhere</button>
    </div>
</div>)
}



const Blogs = () => {
    return (
        <div className="row">
            {array}
        </div>

    )
};

export default Blogs;
  