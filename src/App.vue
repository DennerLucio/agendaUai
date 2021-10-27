<template>
  <div id="app">
  
   <nav class="navbar navbar-expand-md navbar-dark bg-primary" id="navtop">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/">
                <a class="nav-link" href="#">Home</a>
                 </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cadastrolocal">
                <a class="nav-link" href="">Meus Espaços</a>
                </router-link>
            </li>
            
        </ul>
    </div>
    <div class="mx-auto order-0">
      <router-link to="/">
        <a class="navbar-brand mx-auto" href="#" id="lg">AgendUai</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2" id="navbutton">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/login">
                <a class="nav-link" href="#">Entre</a>
                </router-link>
            </li>
            
            <li class="nav-item">
              <router-link to="/cadastro">
                <a class="nav-link" href="#">Cadastre-se</a>
                </router-link>
            </li>
        </ul>
    </div>
</nav>
    <router-view />
<!-- rodape /////////////////////////////////////////-->

<footer class="footer">
    <div class="container">
        <div class="row">
        <div class="col-sm-3">
            <h4 class="title">About us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
            <ul class="social-icon">
                <a href="#" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
            </ul>
        </div>
        <div class="col-sm-3">
            <h4 class="title">Nosso Contato</h4>
            <span class="acount-icon">          
            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> Instagram</a>
            <a href="#"><i class="fa fa-users" aria-hidden="true"></i> Facebook</a>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Email</a>
            <a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Twitter</a>           
            </span>
        </div>
        <div class="col-sm-3">
            <h4 class="title">Parceiros</h4>
            <div class="category">
                <a href="#">Arranjos Festas</a>
                <a href="#">Imobiliaria casas</a>
                <a href="#">Prefeitura de itaiatinga</a>       
            </div>
        </div>
        <div class="col-sm-3">
            <h4 class="title">Forma de Pagamentos</h4>
            <p>Aceitamos Visa, MasterCard, Nubank, PayPal, Pix.</p>
            <ul class="payment">
                <li><a href="#"><i class="fa fa-cc-amex" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i></a></li>            
                <li><a href="#"><i class="fa fa-paypal" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-cc-visa" aria-hidden="true"></i></a></li>
            </ul>
            </div>
        </div>
        <hr>
        <div class="row text-center"><a href="http://lacodeid.com/" style="color: #fff;">Copyright © Your Website lacodeid 2017</a></div>
    </div>	
</footer>



  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


/*rodape //////////////////////////////////////*/


.footer {
    padding: 50px 0 20px 0;
    background-color: #090c14;
    color: #878c94;
}
.footer .title{
	text-align: left;
	color:#fff;
	font-size:25px;
}
.footer .social-icon{
	padding:0px;
	margin:0px;
}
.footer .social-icon a{
	display:inline-block;
	color:#fff;
	font-size:25px;
	padding:5px;
}
.footer .acount-icon a{
	display:block;
	color:#fff;
	font-size:18px;
	padding:5px;
	text-decoration:none;
}
.footer .acount-icon .fa{
	margin-right:25px;
}
.footer .category a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 5px 20px;
    margin: 1px;
    border-radius:4px;
    margin-top: 6px;
    background-color: black;
    border: solid 1px #fff;
}
.footer .payment{
	margin:0px;
	padding:0px;
	list-style-type:none
}
.footer .payment li{
	list-style-type:none
}
.footer .payment li a {
    text-decoration: none;
    display: inline-block;
    color: #fff;
    
    font-size: 25px;
    padding: 10px 10px;
}

@media (min-width: 992px){

#navtop{
height: 75px;
}


}
@media (max-width: 992px){

#navbutton{
position: absolute;
right: 0;
}


}

</style>
