document.addEventListener("DOMContentLoaded", function() {
    
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleFormLink = document.getElementById("toggle-form");
    const message = document.getElementById("message");
    const guestButton = document.getElementById("guest-button");
  
    toggleFormLink.addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
      registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
      message.innerText = "";
    });
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const username = loginForm.elements[0].value;
      const password = loginForm.elements[1].value;
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          message.innerText = "¡Inicio de sesión exitoso!";
          // Aquí puedes redirigir al usuario a una página de inicio de sesión exitosa
          window.location.href = "segunda_pagina.html";
        } else {
          message.innerText = "Nombre de usuario o contraseña incorrectos.";
        }
      } else {
        message.innerText = "No hay usuarios registrados.";
      }
    });
  
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = registerForm.elements[0].value;
      const password = registerForm.elements[1].value;
      const storedUsers = localStorage.getItem("users");
      const newUser = { username, password };
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const existingUser = users.find(u => u.username === username);
        if (existingUser) {
          message.innerText = "El nombre de usuario ya está registrado.";
        } else {
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
          message.innerText = "¡Registro exitoso! Por favor, inicia sesión.";
          loginForm.style.display = "block";
          registerForm.style.display = "none";
          loginForm.elements[0].value = "";
          loginForm.elements[1].value = "";
        }
      } else {
        localStorage.setItem("users", JSON.stringify([newUser]));
        message.innerText = "¡Registro exitoso! Por favor, inicia sesión.";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        loginForm.elements[0].value = "";
        loginForm.elements[1].value = "";
      }
    });
  
    guestButton.addEventListener("click", function() {
      // Realiza las acciones necesarias para entrar como invitado
      // Aquí puedes redirigir al usuario a la segunda página para invitados
      window.location.href = "pagina2.html";
    });
  });
  