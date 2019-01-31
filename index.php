<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js" charset="utf-8"></script>
    <link rel="stylesheet" href="css/app.css">
    <title>ChartBool</title>
  </head>
  <body>
    <?php include 'database.php' ?>
    <div class="container">
        <h1>Milestone 1 </h1>
      <canvas id="milestone-1"></canvas>
      <h1>Milestone 2 - Line Graph </h1>
      <canvas id="milestone-2-line"></canvas>
        <h1>Milestone 2 - Pie Graph </h1>
      <canvas id="milestone-2-pie"></canvas>
    </div>
    <script src="src/js/app.js" charset="utf-8"></script>
  </body>
</html>
