<template>
  <div class="main">
    <div class="wrapper">
      <div class="item1">
        <img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img">
      </div>
      <div class="item2">
        <h3>Settings</h3>
        <form>
          <input class="input" type="text" id="username" name="username" placeholder="Username">
            <button value="changename" type="button" name="changename" class="buttonSettings & button">Change</button>
          <input class="input" type="text" id="name" name="name" placeholder="Name">
            <button value="changelname" type="button" name="changelname" class="buttonSettings & button">Change</button>
          <input class="input" type="email" id="email" name="email" placeholder="Email">
            <button value="changeemail" type="button" name="changeemail" class="buttonSettings & button">Change</button>
          <input class="input" type="password" id="password" name="password" placeholder="Password"><br>
          <input class="input" type="password" id="password2" name="password2" placeholder="Confirm password">
            <button value="changepassword" type="button" name="changepassword" class="buttonSettings & button">Change</button>
          <br>
        </form>
        </div>
      <div class="item3"></div>
    </div>
  </div>

</template>

<style scoped>

.item2 {
  grid-area: b;
  display: grid;
  justify-content: left;
  justify-self: left;
  align-content: start;
  background: whitesmoke;
}

</style>
