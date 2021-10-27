<template>
 <div>
<section>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/casamento.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/reuniao.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/festa.png" class="d-block w-100" alt="...">
            </div>
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</section>
<section class="search-sec">
    <div class="container">
        <form action="#" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" class="form-control search-slt" placeholder="Cidade">
                        </div>
                       
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Finalidade </option>
                                <option>Festas</option>
                                <option>Casamento</option>
                                <option>Formatura</option>
                                <option>Reuniões</option>
                                <option>Baile</option>
                                <option>Shows</option>
                                <option>Lazer</option>
                                <option>Comercio</option>
                            </select>
                        </div>
                         <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Tipo </option>
                                <option>Apartamento</option>
                                <option>Sitio</option>
                                <option>Salão</option>
                                <option>Sala</option>
                                <option>Igreja</option>
                                <option>Fazenda</option>
                                <option>Galpao</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">Procurar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>

<!--//////////////////////////////////////////////////////////////-->
<div class="container py-5">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Principais Categorias</h1>
            <p class="lead mb-0">Encontre seu lugar ideal</p>
           
            
        </div>
    </div>
</div><!-- End -->


<div class="container">
    <div class="row text-center">

        <!-- Categorias item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="../assets/icasamento.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Casamento</h5><span class="small text-uppercase text-muted">Igrejas,Salões,Sitios</span>
               
            </div>
        </div><!-- End -->

        <!-- Categorias item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Reuniões</h5><span class="small text-uppercase text-muted">Saloes,Sitios,</span>
               
            </div>
        </div><!-- End -->

        <!-- Team item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
               
            </div>
        </div><!-- End -->

        <!-- Team item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
               
            </div>
        </div><!-- End -->
    </div>
</div>


 </div>
  
</template>

<script>

</script>

<style>


body {
    background: #e8cbc0;
    background: -webkit-linear-gradient(to right, #9ed6f7, #007bff);
    background: linear-gradient(to right, #9ed6f7, #007bff);
    min-height: 100vh;
   
}







/*///////////////////////////////////////////////////////////////////////////////*/ 






/*search box css start here*/

.search-sec{
    padding: 2rem;
}
.search-slt{
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    height: calc(3rem + 2px) !important;
    border-radius:0;
   
 
}
.wrn-btn{
    margin-left: 5px;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
    border-radius:0;
}
@media (min-width: 992px){
    .search-sec{
        position: relative;
        
        background: #007bff;
    }
}

@media (max-width: 992px){
    .search-sec{
        background:  #007bff;
    }
}
</style>