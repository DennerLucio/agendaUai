<template>
  <div class="borda">
    <form class="register">
      <div class="form-group">
        <label for="inputName" id="labelName">Nome:</label>
        <input type="name" class="form-control" id="inputName" />
      </div>

      <div class="form-group">
        <label for="inputCpf" id="labelcpf">Insira seu CPF:</label>
        <input
          type="textS"
          class="form-control cpf-mask"
          placeholder="Ex.: 000.000.000-00"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail" id="labelemail">Insira seu Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          placeholder="Ex.: agendauai@gmail.com"
        />
      </div>

      <div class="form-group">
        <label for="inputPassword">Senha:</label>
        <input type="password" class="form-control" id="inputPassword" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirmar Senha:</label>
        <input
          type="password"
          class="form-control"
          id="inputConfirmaPassword"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1" id="termos"
          >Li e concordo com os <a href="">termos</a>  </label
        > 
      </div>
      <button type="submit" class="btn btn-primary" id="btnCadastro">
        CADASTRAR
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.borda {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 90%;
  max-width: 450px;
  min-width: 330px;
  background-color: white;
  border: 1px solid;
  border-radius: 10px 10px 10px 10px;
  border-color: rgb(216, 212, 212);
}
.register {
  width: 70%;
}

#labelName{
  margin-top: 25px;
}

#btnCadastro{
  margin-bottom: 25px;
   border-radius: 10px 10px 10px 10px;
}
</style>