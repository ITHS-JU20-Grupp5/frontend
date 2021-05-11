<template>
  <div class="main">
    <div class="wrapper">
      <div class="item1">
        <img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img">
      </div>
      <div class="item2">
        <h3>Settings</h3>
        <form>
          <label for="fname">First name</label>
              <br>
          <input type="text" id="fname" name="firstname" placeholder="Your name..."> <button value="changename" type="button" name="changename">Change</button>
              <br>
          <label for="lname">Last name</label>
              <br>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..."> <button value="changelname" type="button" name="changelname">Change</button>
              <br>
          <label for="phone">Phone</label>
              <br>
          <input type="tel" id="phone" name="phone" placeholder="Phone number"> <button value="changephone" type="button" name="changephone">Change</button>
              <br>
          <label for="email">Email</label>
              <br>
          <input type="email" id="email" name="email" placeholder="your@email.here"> <button value="changeemail" type="button" name="changeemail">Change</button>
              <br>
          <label for="password">Password</label>
          <br>
          <input type="password" id="password" name="password" placeholder="Password">
          <br>
          <input type="password" id="password2" name="password2" placeholder="Confirm password">
          <button value="changepassword" type="button" name="changepassword">Change</button>
          <br>
        </form>
        </div>
    </div>
  </div>

</template>
