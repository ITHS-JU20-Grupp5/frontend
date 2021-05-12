<template>
  <div class="main">
    <div class="wrapperLogin">
      <div class="item1">
        <img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img">
      </div>
      <div class="item2Col3">
        <h3>Settings</h3>
        <form>
          <input type="text" id="username" name="username" placeholder="Username">
            <button value="changename" type="button" name="changename" class="buttonSettings">Change</button><br/>
          <input type="text" id="name" name="name" placeholder="Name">
            <button value="changelname" type="button" name="changelname" class="buttonSettings">Change</button><br/>
          <input type="email" id="email" name="email" placeholder="Email">
            <button value="changeemail" type="button" name="changeemail" class="buttonSettings">Change</button><br/>
          <input type="password" id="password" name="password" placeholder="Password"><br/>
          <input type="password" id="password2" name="password2" placeholder="Confirm password">
            <button value="changepassword" type="button" name="changepassword" class="buttonSettings">Change</button>
          <br>
        </form>
        </div>
      <div class="item3"></div>
    </div>
  </div>

</template>
