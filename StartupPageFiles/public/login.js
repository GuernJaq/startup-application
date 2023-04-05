(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('username');
    if (userName) {
      const nameEl = document.querySelector('#username');
      nameEl.value = userName;
      const user = await getUser(nameEl.value);
      authenticated = user?.authenticated;
    }
  
    if (authenticated) {
      document.querySelector('#playerName').textContent = userName;
      setDisplay('loggedOut', 'none');
      setDisplay('loggedIn', 'block');
    } else {
      setDisplay('loggedOut', 'block');
      setDisplay('loggedIn', 'none');
    }
  })();
  
  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;

    localStorage.setItem('username',userName);
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();
  
    if (response?.status === 200) {
      localStorage.setItem('username', userName);
      window.location.href = 'vote1.html'
    } else {
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
      console.log('fail')
    }
  }
  
  function play() {
    window.location.href = 'vote1.html'
  }
  
  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }
  
  async function getUser(email) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
  
  function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }
  