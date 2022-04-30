# Implementation of Graph And Page Rank Algorithm

## Overview

A project which implements graph data structure from scratch using Javascript, exposes apis using express.js running inside a node server, client application is built using create react app.

Furthermore, it implements page rank algorithm using graphs data structure implemented above.

For reading about page rank algorithm visit

<https://en.wikipedia.org/wiki/PageRank>
<https://www.youtube.com/watch?v=ztc6sYgapwA&ab_channel=BarryVanVeen>

---

## Steps of Algorithm

- Modelling of Graphs using Adjacency Matrix Representation
- Conversion Into Normalized Adjacency Matrix
- From Normalized Into Transition Matrix
- Equal Probability Matrix
- Multiplying a number of iterations of Transition Matrix with the Equal Probability Matrix.
- Get Page Rank Matrix

## Running Project

- Go to client folder,open terminal, run yarn install and run yarn start.
- Go to server folder, open terminal, run yarn install and run yarn dev.

## ScreenShots

<div>
    <img src="/screenshots/1.png" width="800px"/> 
</div>
<div>
    <img src="/screenshots/2.png" width="800px"/> 
</div>
<div>
    <img src="/screenshots/3.png" width="800px"/> 
</div>

## Design Considerations

This project uses value alpha equal to 0.05. We perform 10 iterations to get to the steady state value of transition matrix.

## Limitations

We are storing values as a numbers. In future a node can be a whole object.
Currently our algorithm is not so accurate as we are only performing 10 iterations.
