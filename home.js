// export const home = (userName = "") => {
//     const htmlString = `
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
  
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//   </head>
  
//   <body>
  
//   <div class="container">
//     <h1> HOME</h1>
  
//     <nav>
//       <ul>
//         <li><a href="/home"> HOME </a></li>
//         <li><a href="/login"> Login </a></li>
//         <li><a href="/Register"> Register </a></li>
//       </ul>
//     </nav>
//     <hr />
//     <p>WELCOME [user] TO OUR PAGE</p>
//   </div>
//   </body>
  
//   </html>
//   `;
  
//     return htmlString.replace("[user]", userName);
//   };
  
//   export const login = () => {
//     return `
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
  
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//   </head>
  
//   <body>
  
//   <div class="container">
//     <h1> Login</h1>
  
//     <nav>
//       <ul>
//         <li><a href="/home"> HOME </a></li>
//         <li><a href="/login"> Login </a></li>
//         <li><a href="/Register"> Register </a></li>
//       </ul>
//     </nav>
//     <hr />
//     <div class="row">
//       <div class="col-6">
//     <form
//      action="/login"
//      method="post"
//      enctype="application/x-www-form-urlencoded"
//     >
//     <div class="mb-3">
//       <label for="exampleInputEmail1" class="form-label">Email address</label>
//       <input type="email" class="form-control" id="exampleInputEmail1" 
//       name="email"
//       aria-describedby="emailHelp">
//       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//     </div>
//     <div class="mb-3">
//       <label for="exampleInputPassword1" class="form-label">Password</label>
//       <input type="password" class="form-control" id="exampleInputPassword1" name="password">
//     </div>
//     <button type="submit" class="btn btn-primary">Login</button>
//   </form>
  
//       </div>
//     </div>
  
//   </div>
//   </body>
  
//   </html>
//   `;
//   };
  
//   export const register = () => {
//     return `
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
  
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//   </head>
  
//   <body>
//     <div class="container">
//       <h1> Register</h1>
  
//       <nav>
//         <ul>
//           <li><a href="/home"> HOME </a></li>
//           <li><a href="/login"> Login </a></li>
//           <li><a href="/Register"> Register </a></li>
//         </ul>
//       </nav>
//       <hr />
//       <div class="row">
//         <div class="col-6">
//           <form
//             action="/register"
//             method="post"
//           >
//             <div class="mb-3">
//               <label for="exampleInputEmail1" class="form-label">Email address</label>
//               <input type="email" class="form-control" id="exampleInputEmail1" 
//               name="email"
//               aria-describedby="emailHelp">
//               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//             </div>
  
//             <div class="mb-3">
//               <label for="exampleName" class="form-label">Name</label>
//               <input type="text" class="form-control" id="exampleName" name="name" aria-describedby="emailHelp">
//             </div>
  
//             <div class="mb-3">
//               <label for="exampleInputPassword1" class="form-label">Password</label>
//               <input type="password" class="form-control" id="exampleInputPassword1"
//               name="password">
//             </div>
//             <button type="submit" class="btn btn-primary">Register</button>
//           </form>
  
//         </div>
//       </div>
//     </div>
//   </body>
  
//   </html>
//   `;
//   };


export const home = (userName = "") => {
  const htmlString = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>

<div class="container">
  <h1> HOME</h1>

  <nav>
    <ul>
      <li><a href="/home"> HOME </a></li>
      <li><a href="/login"> Login </a></li>
      <li><a href="/Register"> Register </a></li>
    </ul>
  </nav>
  <hr />
  <p>WELCOME [user] TO OUR PAGE</p>
</div>
</body>

</html>
`;

  return htmlString.replace("[user]", userName);
};