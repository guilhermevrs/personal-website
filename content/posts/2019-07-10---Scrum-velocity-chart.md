---
title: How I use the sprint velocity data in my team
date: "2019-07-10T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/scrum-team-velocity-chart/"
category: "Agile"
tags:
  - "Agile"
  - "Scrum"
description: "This article describes how I manage and use the team velocity in the scope planning decisions"
---

## TL;DR Session

* Velocity is not the holy grail, but a good indicator
* Team velocity should be computed in average, pessimitic and optimistic
* This data can be used prior the sprint start and for project forecast
* A small excel file to compute your velocity [is shared here](#excel-gift)

## Overview

Very often I searched for terms like:

* How to use team velocity for planning
* How to adapt team velocity when team changes
* How to have stable team velocity with vacations, sick leaves, blockers, etc...

In the end of the day, what I was really searching for, was a magical number that would predict the impredictable and that I could use for mathematical equations and fancy graphs.

![Me trying to figure out what's the team's velocity for the next sprint when someone is on vacation](https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif)

## Velocity is not a magical number

Some may argue that one shouldn't use velocity planning, but rather a capacity planning. To be honest, I have never really understood this argument due to two main flaws in it. First, by following this kind of planning, one should consider that person A does the exact same amount of work that person B in the same time space. 

This is hardly ever true, since skill levels are different among team members (person A may be more or less confortable in a specific domain than others). Second, even if you have the exact same skill levels in the team, the sizing of the user stories must be done in days. That is a major problem since you will still live with the impredictability. Who is going to work on this US? How many days this person is going to spend on it? How to measure the "unknown" part of the US? In other words, predict the impredictable.

As the name said, it's impredictable. It can't be predicted with 100% of confidence factor. Nothing can change that, even if you size your user stories with points and that you computed your velocity based on the average of delivered points of the last X sprints. What it gives you, though, is an indicator. Data that you will analyze, among other indicators. From this analysis, the team tries to build a confidence factor on what can and what can't be delivered.

A good analogy is the gas tank light indicator in a car. If you are not used to the car (perhaps it's a rental), whenever the light goes on you don't feel confortable, you want to stop and look for the closest gas station. However, when you know well the car, you have been driving for a while, you know that even if the light goes on, you may drive a few miles until it goes dry. The car, in the example, it's your team. The gas tank light, the team velocity. At first, when it's a new team, you try to keep as close as possible to the velocity. But time passes, experience grows and the team gets a better picture on what it can deliver in the next sprint, considering not only the computed velocity, but the fact that John or Mary won't be there for the next week or the uncertain nature of the next tasks in the backlog for example.

![When the sprint backlog fills up close to the team velocity](/media/scrum-velocity/low-gas-tank.jpg)

## How I compute the velocity

Now that we consider the velocity as what it really is - an indicator - it's time to get a good one. A lot of articles over the web state that you should simply look at the past X sprints (usually 3) and compute the average of the delivered points. Let's suppose Team A delivered the following in the last 3 sprints:

* Sprint N-3: 65 points
* Sprint N-2: 40 points
* Sprint N-1: 15 points

Team A velocity then, for sprint N, would be 40 points. Would you be confortable commiting to 45 points (As it is only 5 points more than the team's velocity)? What about exactly 40 then ? Hard, huh?

Let's say, now, that Team B performed as follow:

* Sprint N-3: 41 points
* Sprint N-2: 40 points
* Sprint N-1: 39 points

Team B velocity is 40 points as well. Now would you be confortable commiting to 45? And 40? Not the same feeling right? Although both velocities are equal, the confidence it gives is not the same since the historical data collected are spread differently. Team B constantly delivered around 40 points, while Team B had it more spreaded.

To quantify this situation, the standard deviation fits well.

The standard deviation is computed as follows:

![Standard deviation formula](/media/scrum-velocity/std-formula.png)

Where:

* ``X`` is the observed data
* ``X bar`` is the average of the sample
* ``n`` is the number of observed data.

In other words, it's the square root of the sum of the square difference between each data point and the average, divided by the number of data points. The standard deviation of the delivered points of Team A and B from the previous example are, respectivelly:

* Team A ~= ``20.4124``
* Team B ~= ``0.8615``

Taking the assumption that the data follows a normal distribution ([more on this distribution here](https://simple.wikipedia.org/wiki/Normal_distribution)), if you start from the average and stablish an upper and lower bound by adding and subtracting, respectively, the standard deviation, you can cover ``68.27%`` of the data points. One could create the upper and lower bound using the double of the standard deviation, which would contains ``95.45%``of the distribution. However, for empirical reasons I would advise against it.

![Normal distribution](/media/scrum-velocity/normal-distribution.png)

What I would usually do is to normalize the deviation with the next integer and create what I call a pessimistic and optimistic velocity. The first one, computed by subtracting the deviation from the average, is our lower bound. Is the scenario where we have more uncertainty, support requests, unpredictable issues, etc. The other one, the optimistic, is when we feel the work is fluid as ever, almost none support requests, as if the code gets written by itself. In the above example we have:

![Optimistic and pessimistic velocity comparison](/media/scrum-velocity/optimistic-pessimistic-example.png)

## How I use the velocity in planning

Now that you have the upper and lower bound of your team's velocity, you can use this information in two situations

### When planning the next sprint

During the Sprint Planning, the team gets together and, knowing their average velocity of 40 points, looks at the product backlog. Folowing the priority set by the Product Owner, the sum of the most important tasks points can be either 37 or 45 points. By only having the average, it's hard to get a good confidence factor. 

One could blindly go always for the average velocity being the maximmun points the team can do during the sprint. In the example above, they would go for the 37 points, leaving the 8 points task out of the scope. From my experience, this has negative impacts on the team (we don't challenge ourselves to deliver more) and on the stakeholders (this feature we dropped was so close to be in progress).

On the other hand, we could have chosen to increase the number of points in the sprint (let's say taking the 45 points instead). But how far can we go without puting in danger the commitments? How much can we challenge the team without making of every sprint a failure?

There it comes the optimistic velocity, or the upper-bound. If my average is 40, but my optimistic one is 52, why not commiting to the 45 points? We could even tag whatever it goes over the average as a streched objective. Something that the team commits if everything goes as expected? Good impacts on the team (a bit of challenge on their scope under calculated risks) and on the stakeholders (I can see the team making an extra effort to put my feature in).

### When planning the deliveries of your product backlog

It's not because we work in agile that we don't plan the way ahead. Imagine you will pay to build your new car from scratch. The supplier tells you because they are evoling the way of work, entering in an agile mindset, you will receive in the beginning of the week what they may be able to accomplish and they can't tell you in advance when it will be ready. Awful right?

By looking at the lower and upper bound velocity, one can have projections on which sprint a feature will be delivered and how much can be delivered until next X sprints. The image below shows an example of this projection. The green line indicates an optimistic vision of how many points can be develivered in each future sprint (considering you sum up the already delivered). On the other hand, the red line sets a pessimistic vision, working like a lower bound.

![Burn-up forecast](/media/scrum-velocity/burn-up.png)

With those indicators, the Product Owner, together with the Stakeholders, can decide on the priority of items and identify if a priority shift must happen in order to meet business needs. The forecast can be like

>> "Considering the progress so far, the team may be able to deliver an accumulate of 25 to 30 points on sprint N+3"

or

>> "By analysing the deliveries so far, we may be able to deliver 23 points (13 points from what we have delivered so far) in between sprint N+2 and N+3"

## <a name="excel-gift"></a>Conclusion

There you go, here is my 2 cents on team velocity. If you want to give it a try, I am sharing the Excel file I use with my teams to compute that. Feel free to use it:

![](/media/scrum-velocity/excel-file-icon.png)
[Download here](/media/scrum-velocity/team-velocity.xlsx)