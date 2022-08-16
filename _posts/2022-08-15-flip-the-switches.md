---
title: 'Solution to "Flip The Switches" on DMOJ'
mathjax: true
excerpt_separator: <!--more-->
layout: post
category: ["competitive programming", "ad hoc"]
---

This post was created as an extension to my previous post, ["Breaking Down Time Complexity"](https://blog.markp.xyz/2022/08/all-about-time-complexity/), providing a solution to a problem shown on the blog post. 

<!--more-->

## Introduction
Ad Hoc is often one of the most feared topics found in competitive programming. This is as there is no true "way" to solve an ad hoc problem, relying on the competitor's intuition and problem-solving skills rather than requiring knowledge of certain algorithms (though there are some exceptions). In other words, there is no "set" way to solve an ad hoc problem and relies simply on practice. The following problem is an ad hoc problem, worth 5 points on DMOJ, meaning it is a great introduction for beginners into the problem type.

## The Problem

Link to the problem: [Flip The Switches](https://dmoj.ca/problem/fts)

Or, you can read it here:

> ## Flip The Switches 
> Megumin is trying to deactivate a security system! The security system is composed of $$ N $$ different switches, and is only fully deactivated when all of the switches are off. Let's define flipping a switch as changing it from on to off, or vice versa. Megumin has thought of the ingenious idea of ~~exploding the whole thing~~ flipping the switches with her staff to avoid detection! However, given her position, she can only use her staff to flip a prefix of the switches (switches $$ 1 $$  to $$ k $$, $$ 1 \le k \le N $$ ) in one click. Can you help her figure out the minimum number of clicks needed to fully deactivate the system without using explosion?

> ## Input Specification
> The first line will contain an integer $$ N \ (1 \le N \le 10^6) $$
> The next line will contain a string of $$ N $$ characters `0` and `1`, representing the states of the switches from $$ 1 $$ to $$ N $$ (`0` is off, `1` is on).
> ## Output Specification
> Output the minimum number of clicks required to fully deactivate the system

> ## Sample Input
> <pre>4<br />1001</pre>
> ## Sample Output
> <pre>3</pre>
Credit to **4fecta** for the amazing problem.

## The Solution

Try and solve the problem yourself, before reading the solution!

---
A great way to get started with solving an ad hoc problem is by trying to solve the problem manually, by hand, and seeing if any patterns arise. We can try this on the sample input. In our case, our goal is to turn all the `1`'s into `0`, with the limitation that we have to flip all the switches from $$ 1 $$ to $$ k $$, where $$ k $$ is the light switch number we pick (e.g if I want to flip the $$4th$$ switch, I have to flip all switches from $$1$$ to $$4$$). <br /><br />
Looking at the sample input, we notice two switches that are still on, one in the $$1st$$ position, and the other in the $$4th$$ position. We note that if we want to turn off the $$4th$$ switch, it also means turning on two other switches. Although this is perfectly fine, it is also clearly easier to simply flip the $$1st$$ switch first. 
<br /> <br />
After flipping the $$1st$$ switch, we end up with `0001`. Now we need to work on turning off the $$4th$$ switch. We have two optimal options on this step. We either flip the $$3rd$$ switch, and end up with `1111`, or we flip the $$4th$$ switch, and end up with `0111`. Both will end up in turning off all switches on the next step after. This leaves us with the optimal answer of $$3$$ switches in order to turn off all switches.<br /><br />

After doing the sample input, there are still no clear indicators or patterns found in order to solve the problem. In this case, we can always just try another input and solve it manually. Let's try something more complex, solving for the input `101010`. <br /> <br/>

Like the last problem, we note that it is simplest to first flip the $$1st$$ switch to turn it into `001010`. <br /> <br />

The two remaining switches are found in the $$3rd$$ and $$5th$$ position, and it is clearly simpler to work on the $$3rd$$ switch first, as it comes before the $$5th$$ position (remember: we are going to implement an algorithm later, going in order is much easier to implement than going back-and-forth, unless it is required. Like in the sample input, there are two optimal choices on this step, both ending with the same result, either flipping the $$2nd$$ switch or the $$3rd$$ switch. Both will ultimately turn off the first $$3$$ switches within two steps (if you aren't sure, try it yourself, and see what happens!). Two steps later, we end up with a result of `000010`. <br /> <br />

Now we move to the $$5th$$ switch. Just like when we were dealing with the $$3rd$$ switch, we have two optimal moves, both of which will turn off the $$5th$$ switch within two moves. We add another two moves, and get a final result of `000000`. <br /><br />

This gives us a final answer of $$1 + 2 + 2 = 5 $$. <br /><br />

Have you noticed a pattern yet? <br /><br />

Excluding when the $$1st$$ switch, turning off all other switches takes $$2$$ moves minimum. The $$1st$$ switch simply takes one move to turn off.
<br /><br />
This is our key realization needed to solve the problem. But before getting overconfident, be sure to check your realization is correct, and accounts for all cases in the problem. In our case, we ignored one situation: when there are multiple $$1$$'s together (e.g `111` or `011011`). <br /><br />
Doing cases like these manually again, we find another key realization. We can simply group together the $$1$$s, as they can all be turned off at once. If you are confused, try solving $$10101$$ manually, and then solving $$11011011$$ manually. They should give the same answer. Notice the pattern? <br/><br />
Finally, we can move into implementation. Thankfully for us, it is quite simple. We iterate through the string given, and account for two things: grouping together the $$1$$s, and if there is a switch that we need to turn off on the $$1$$st position, only add one to the answer, otherwise add two.  <br /><br />

Example implementation below:

```cpp
#include <bits/stdc++.h>
using namespace std;
int n, ans; string s; 
int main(){
    cin >> n >> s;
    for(int i = 0; i < n; i++){
        if(i == 0 && s[i] == '1') ans++;
        else if (s[i] == '1' && s[i-1] != '1') ans += 2;
    }
    cout << ans << '\n';
}
```

This passes well under the time limit with a total time complexity of $$O(n)$$.