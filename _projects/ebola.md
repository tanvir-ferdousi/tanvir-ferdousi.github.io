---
layout: page
title: Contact tracing with Ebola
description: Quantifying the impact of early-stage contact tracing using activity driven networks
img: assets/img/ebola.jpg
importance: 4
category: epidemic model
---

Contact tracing is a mitigation strategy which can help contain an infectious outbreak if it is deployed in time. In this work, we use analyze the effect of early-stage contact tracing using a mathematical modeling framework. We use a patient-centric dynamic contact model using activity driven networks (ADN). To simulate the disease spread and the contact tracing process, we use a stochastic transitions among epidemiological states

<div class="row justify-content-center">
  <div class="col-sm-8">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/ebola/ebolaCT_model.jpg" alt="" title="Ebola contact tracing model"/>
  </div>
</div>
<div class="caption">
    A diagram of the stochastic transition processes of the Ebola contact tracing model. We use a \(SEIR\) model with an additional compartment \(H\). The symbols \( S, E, I, H, \) and \( R \) indicate susceptible, exposed, infectious, hospitalized, and removed states respectively. The states with superscript \(T\) indicates individuals in similar states after being traced. The transitions rate symbols \( \alpha, \beta, \lambda, \gamma, \) and \( \delta \) indicate the rates of identification, transmission, incubation, hospitalization, removal/recovery.
</div>

Our results indicate that it is critical to start contact tracing within a few days (< 10 days), if not immediately after the disease emergence. Quick identification of contacts can reduce the outbreak size up to 50% compared to delayed detection.

<div class="row justify-content-center">
  <div class="col-sm-8">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/ebola/r0_vs_alpha.jpg" alt="" title="Basic reproductive number vs. identification delay"/>
  </div>
</div>
<div class="caption">
    The basic reproductive number (\( R_0 \)) as a function of the detection delay (\( \alpha^{-1} \)) for three different contact tracing scenarios as indicated in the legend box.
</div>

| Publication | Source Code | Official Project Page |
|-------------|----------|--------|
| [Mathematical Biosciences and Engineering](https://www.aimspress.com/article/10.3934/mbe.2018053) | Not Published | [K-State NetSE](https://www.ece.k-state.edu/netse/projects/sprojects/proj0.html) |
{:.table .table-bordered}

<!-- The work was published in Mathematical Biosciences and Engineering (MBE) journal which can be accessed via this [link](https://www.aimspress.com/article/10.3934/mbe.2018053). The official project page of the NetSE group can be found [here](https://www.ece.k-state.edu/netse/projects/sprojects/proj0.html). -->
