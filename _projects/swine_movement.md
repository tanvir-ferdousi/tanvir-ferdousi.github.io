---
layout: page
title: Generating swine movement network
description: Generation of swine movement network and simulating the spread of African swine fever virus (ASFV)
img: /assets/img/asfv/movement_net.jpg
importance: 3
category: graph mining
---

Animal movement networks are important to model disease outbreaks and identify the pathways of disease spread. In the US, pig farm data including herd sizes, geolocations, and movements between farms are difficult to obtain due to the sensitive nature of data and potential economic risk of making such information public. We propose a method to generate movement networks from limited data available in the public domain. Using the generated network from our method, we simulate the spread of African swine fever virus (ASFV) and analyze how the network structure affects the disease spread.

<div class="row justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/asfv/movement_net.jpg" alt="" title="Generated movement network"/>
  </div>
</div>
<div class="caption">
    The diagram depicts a farm level swine movement graph synthesized from available aggregated data. The solid circles (nodes) indicate swine operations and the gray arrows connecting them indicate pig shipments. The swine operations are labeled according to their types: Boar Stud (B), Farrow (F), Nursery (N), Grower/Finisher (G), and Market/Slaughterhouse (M).
</div>

We find that high in-degree farm operations play critical roles in spreading the disease. Targeted isolation of those operations can efficiently contain outbreaks as indicated by the figure below.

<div class="row justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/asfv/isolation.jpg" alt="" title="Comparison of isolation schemes"/>
  </div>
</div>
<div class="caption">
    The figures compare several isolation (quarantine) schemes based on farm node centrality measures. Three quarantine strategies (high in degree, \(K_{in}\), high out degree, \(K_{out}\), and high betweenness, \(BC\)) are compared. For each strategy, different number of farms are isolated gradually from ranked lists of above mentioned centralities. The left plot shows the epidemic attack rates and the right plot shows the epidemic lengths. The data points are mean values computed from 10,000 stochastic simulations and the shaded regions show 95% confidence intervals.
</div>

| Publication | Source Code | Official Project Page |
|-------------|----------|--------|
| [PLOS ONE](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0225785) | [GitHub](https://github.com/tanvir-ferdousi/movement-network-asfv) | [K-State NetSE](http://www.ece.k-state.edu/netse/projects/sprojects/proj17.html) |
{:.table .table-bordered}
<!-- The work was published in PLoS ONE, which can be accessed via this [link](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0225785). The official project page of the NetSE group can be found [here](http://www.ece.k-state.edu/netse/projects/sprojects/proj17.html). -->
