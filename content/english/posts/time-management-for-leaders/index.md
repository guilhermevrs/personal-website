---
title: "Time management for leaders"
draft: false
images:
  - "images/post/time-management/cover.png"
date: 2020-08-25T10:00:00.169Z
tags: ["Time Management"]
categories: ["Time Management"]
---

The day starts: a list of unread e-mails and conversations from the day before is waiting for you. Post-its and notes you took last week still needs to be addressed and your calendar is already reminding you that the next meeting starts now. You you need to focus on the meeting subject (otherwise you won't be able to follow it) and during this time, the list of incoming items keeps growing... I lost the count of how many times this happened to me.

**Time management is a MUST for any leader** in those situations. The **context switch** present in this role (I still want to write my views on what does it mean being a leader) **implies a flood of information, tasks and thoughts arriving from everywhere**. I also consider the tasks and thoughts regarding your **personal life, that must not be neglected**. All of this needs to be processed and, therefore, **demands time**. Since it's a **limited resource, managing it becomes essential**.

For years now I have been reading books and articles on the matter to build my own time management algorithm. Since my life evolves, so my algorithm gets updated as well. It consists today of a **hybrid approach** from the famous **Getting Things Done (GTD)**, from David Allen (more on [his book](https://www.amazon.com/Getting-Things-Done-Stress-free-Productivity/dp/0349408947/ref=asc_df_0349408947/)). I called hybrid because I never got the motivation to finish his book (Damn, it's full of jibber jabber). I tried to adapt it to my own life, but there are still some aspects/fundaments that I like very much and I will them describe here.

I will also describe how I put them in place using a very nice **task tracker application** called **Todoist** (check [their website](https://www.todoist.com/)). They have a free version, but to be honest, their **premium account is the best 3 euros I spend per month**. The free one is perhaps good to discover, but I heavily use the premium **features like comments, tags and filters** (I am a Master in their karma system :nerd_face:).

Let's start!

## 1) Our brain is an executioner, not a storage 🧠

This is the most impactful one for me. It basically states that **our brain is conceived to execute tasks and create things, not to hold numbers / passwords / dates / etc**. Translating that into other words, it means that **any information** -- no matter if it's a task or not -- **needs to get saved somewhere, right away**, before it gets lost. Preference is that it gets saved in the **same place (a.k.a `Inbox`)**, otherwise you will need to remember where you saved it :wink:.

It's pretty much that: anything that you see, read or think goes **directly to the Inbox to be processed at a given time**. And when I say processed does not mean only **execution, but also categorizing, estimating and scheduling**. I usually **start my day by checking all the possible channels** (personal and professional e-mails, IMs, post-its and breakfast thoughts) and include an **item for each inside the inbox**.

**Tip:** Remember that your brain won't hold the context around each item. Do the effort to **be clear enough on the item description**, otherwise you will have problems later when you will process them.

![Example of my Inbox on Todoist](todoist-inbox-en.png "Example of my Inbox on Todoist")

## 2) Your inbox needs to be processed every day ⚙️

It's not because the tasks and data goes into the inbox that they will magically disappear or get executed. After checking up the channels, I go through each item in the inbox, by the order they got included. Every item goes through the following process (highly based on GTD):

{{/*
graph TD;
    begin(Start)
    id1{Is it an action for you?};
    id2[Store as reference]
    id3[Delegate]
    id4[Delete]
    id5{Less than 2 minutes?}
    id6[Do it!]
    id7["Categorize it #40;e.g. work, personal, etc#41;"]
    id8["Prioritized it #40;e.g. priority 1, priority 2, etc#41;"]
    id9["Size it #40;e.g. XS, S, M, etc#41;"]
    id10{Due date?}
    id11[Schedule it]
    id12{Should follow-up?}
    id13[Schedule reminder]
    id14(Done)
    begin-->id1
    id1-- No, but may be useful -->id2
    id1-- No, it's not up to me -->id3
    id1-- No, it's irrelevant now -->id4
    id1-- Yes -->id5
    id5-- Yes -->id6
    id5-- No -->id10
    id10-- No -->id7
    id10-- Yes -->id11
    id11-->id7
    id7-->id8
    id8-->id9
    id3-->id12
    id12-- No --> id14
    id12-- Yes -->id13
    id13 & id9 & id6 & id4 & id2-->id14
*/}}

![Time process](time-management-mermaid.png "My time management process")

A couple of arguments behind the above decisions:

- The fact of **noting down everything**, even non-actionable things, **removes the effort** of checking if the item is an action or not
- Like in the real GTD, if an action takes **less than 2 minutes** to be completed, **_just do it!_** It will cost you more time and energy if you try to administrate that.
- **Delegating does not mean you shouldn't follow-up**. Move it outside of your view, but set yourself a date to be reminded when you should check it up. **I have a specific Delegate label for that!**
- Sizing it will enable you to later **tackle the shortest items first** and get that good dose of [dopamine](https://en.wikipedia.org/wiki/Dopamine).

## 3) Check the tasks of the day 📆

Remember that you have schedule tasks (and follow-ups) when you processed your inbox? Well, this is the moment where you check the whole list for the day. In here, I usually don't care about the category. **The schedule is there for a reason!** On that case, I advise to **organize your calendar of the day to fit the tasks** considering the meetings you already have, the size of the task and so on.

![A screenshot of my todays list](todoist-today.png "A screenshot of my todays list")

## 4) Tackle the list 💪

Once you have identified the tasks of the day (even tackled some of them that were short enough), it's time to get your head on the job. Look at the **priorities and sizings**, tackle the **highest shortest ones first**. Whatever new item that arrives **during the day, well, it goes to the inbox to be processed tomorrow**. Someone says it is urgent for today? Well, take the time to analyse it then. If it's really something for today, you need to re-evaluate what you have for today, compare to this new item and decide if it's really for today, or you should move it to the inbox.

Since my life is divided into personal and work, I have three main filters:

- **Personal items:** `#Personal* & (p1 | p2 | p3) & !@Delegate` -- Tasks on my side related to personal projects
- **Work items:** `#Work* & (p1 | p2 | p3) & !@Delegate` -- Tasks on my related to work projects
- **On my side:** `!@Delegate & (p1 | p2 | p3) & !#Inbox` -- Any task on my side that has been that has been processed (not Inbox)

You can see that tasks that are delegated do not show up in my list of tasks. This **alleviates the pressure and simplifies the list itself.**

## 5) Review the list 🔎

This last step is the one of the most important part. **_Priorities shift every time_**. The second after you have processed an item in the inbox, the priority you have assigned may have changed. Another common thing: You will always have priority 1 things, but when do the priority 2, 3 etc have their time to shine?

That is why **reviewing the list is important**. Review the priorities! Check the priority 1 and ask yourself if it really makes sense to do it right away. Check what you have set on priority 2 and 3, ask yourself if it's not the time to move it in priority 1. And more important, check if the items are still actionable! If not, delete them :see_no_evil:

By the book, I believe the review is to be done every week. **It works ok with me when I review every 2 weeks** (like in a sprint cadence). I spare an hour for reviewing what directions I am taking at work but also as personal. I then check what I am missing -- what projects I am leaving behind -- and compare the value they bring to me. If there is a shift to be done, I just change the priorities on there.

Ready to try by yourself?

**Update:** I have stumbled upon [this article](https://www.deprocrastination.co/blog/how-to-stop-procrastinating-by-using-the-fogg-behavior-model) on Fogg Behaviour Model. This model tries to explain how behaviour (more precisely procrastination) happens. There are a couple of aspects in this study that I can definitely relate to and kind of explain why this time management technique works well for me. Check the study out :wink:.
