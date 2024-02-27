---
layout: page
title: Quantifying sexual transmission of Zika
description: Analyzing Zika virus survival in sexual contact networks
img: /assets/img/zika/contact_net.jpg
importance: 2
category: epidemic model
---

Zika virus (ZIKV) is predominantly vector-borne and the outbreaks are strongly dependent on the mosquito vectors. There have been evidence and reports of sexual transmission as well for ZIKV. To enhance our understanding on how the interactions of these transmission mechanisms can help sustain the virus during vector free winter seasons, we developed a novel epidemic model that interconnects homogeneous mosquito vector population with heterogeneous sexual contact network.

As a part of this work, we develop a graph generation tool based on the configuration model. The tools takes data on demography, sexual behavior patterns etc. as input and generates random graphs whose statistical properties match those data.

<div class="row justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/zika/contact_net.jpg" alt="" title="Generated sexual contact network"/>
  </div>
</div>
<div class="caption">
    The diagram depicts a 1000 node human sexual contact network generated based on sexual behavior. The nodes are presented in two distinct colors indicated genders (blue: male, pink: female) and three distinct sizes indicating age groups (small: child, medium: adult, large: elderly). This particular example has an average node degree of 0.803. The 64% adult population has an average degree of 1.26 which indicates the average number of partners per year per adult. There are 600 components in this graph, with largest one consisting of 117 nodes (high risk population).
</div>

We also develop an individual-based network model and interconnect it with vector population. We incorporate heterogeneity of the host population but avoid unnecessary computational overhead by considering the vector population as a traditional compartmental model. Our model also differentiate between symptomatic and asymptomatic hosts and consider the extended sexual transmissibility (convalescence) of the recovering hosts. The sexual transmission within the host population is also dependent on gender, sexual orientation, and age. The vector sub-model incorporates seasonal climatic variations. A diagram of the model is given in the following figure.

<div class="row justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/zika/inter_model.jpg" alt="" title="Interconnected disease model"/>
  </div>
</div>
<div class="caption">
    The diagram shows the vector-interconnected network model to simulate Zika virus outbreaks. The black solid circles indicate host nodes (human individuals) and the cloud shape above those indicates mosquito vector population. The solid lines connecting the nodes indicate sexual contacts and the dashed lines indicate mosquito-human contact. A host node can be in any of the seven defined states: healthy/susceptible (\(S\)), exposed (\(E\)), symptomatic infectious (\(I_s\)), asymptomatic infectious (\(I_a\)), symptomatic convalescent (\(J_s\)), asymptomatic convalescent (\(J_a\)), and recovered (\(R\)). A mosquito vector can belong to any of the three defined compartments: healthy/susceptible (\(S_V\)), exposed (\(E_V\)), and infectious (\(I_V\)). The arrows indicate transitions along with the parameter symbols for different types of transitions. More details on the parameters can be found in the paper cited in the bottom of this page.
</div>

The simulation results suggest that for a high relative transmissibility of the asymptomatic hosts, Zika virus shows a high probability of sustaining in the human population, which can be up to 3 months without the presence of mosquito vectors. We also find that the outbreaks are strongly affected by the proportion of asymptomatic hosts and the time of the year when the pathogen is introduced in the population. Although sexual transmission has a relatively minor contribution in the outbreak size, it plays a role in prolonging the outbreaks and may create endemic scenarios.

<div class="row justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/zika/survival.jpg" alt="" title="Pathogen survival analysis"/>
  </div>
</div>
<div class="caption">
    The plots show the results of pathogen survival analysis of Zika virus. These were obtained by varying the following parameters: sexual transmission rate (1st row), relative transmissibility of convalescent hosts (2nd row), proportion of symptomatically infected individuals (3rd row), and relative transmissibility of asymptomatic hosts (4th row). The vertical axes indicates the host infection lengths (1st col), pathogen survival period (2nd col), and attack rate (3rd col). Each data point (blue square) is an average of 500 stochastic simulations. The shaded regions mark 95% confidence intervals.
</div>

| Publication | Source Code | Official Project Page |
|-------------|----------|--------|
| [Scientific Reports](https://doi.org/10.1038/s41598-019-43651-3) | [GitHub](https://github.com/tanvir-ferdousi/intercon-network-zikv) | [K-State NetSE](http://www.ece.k-state.edu/netse/projects/sprojects/longdistance.html) |
{:.table .table-bordered}
<!-- The work was published in Scientific Reports (Nature), which can be accessed via this [link](https://doi.org/10.1038/s41598-019-43651-3). The official project page of the NetSE group can be found [here](http://www.ece.k-state.edu/netse/projects/sprojects/longdistance.html). -->
