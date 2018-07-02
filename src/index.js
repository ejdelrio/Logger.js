'use strict';

const express = require('express');
const PORT = process.env.PORT || 3050;
const app = new express();

app.listen(PORT, () => {
  console.log(`Server ACtive on PORT : ${PORT}`);
})