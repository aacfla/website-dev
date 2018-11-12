---
title: Ride Planner Signup
permalink: /ride-planner-test
---

<form name="rides" method="post" action="#">

<div>
<label for="email">Email</label>
<input type="email" name="email">
</div>

<div>
<label for="name">Name</label>
<input type="text" name="name">
</div>

<div>
<label for="year">Year</label>
<select name="year">
	<option value="2018">2018</option>
	<option value="2019">2019</option>
	<option value="2020">2020</option>
	<option value="2021">2021</option>
</select>
</div>

<div>
<label for="phoneNumber">Phone</label>
<input type="text" name="phoneNumber">
</div>

<div>
<label for="church">Church</label>
<select name="church">
	<option value="CCAC">CCAC</option>
	<option value="Lighthouse">Lighthouse</option>
	<option value="IBC">IBC</option>
</select>
</div>

<div>
<label for="attendance">Can you attend this week?</label>
<select name="attendance">
	<option value="Yes">Yes</option>
	<option value="No">No</option>
</select>
</div>

<div>
<label for="driver">Are you a driver?</label>
<select name="driver">
	<option value="Yes">Yes</option>
	<option value="No">No</option>
</select>
</div>

<div>
<label for="numSeats">If yes, how many seats can you provide?</label>
<input type="text" name="numSeats">
</div>

<div>
<label for="notes">Any notes you would like to mention</label>
<input type="text" name="notes">
</div>

<input type="submit">
</form>

<script type="text/javascript" src="assets/js/rides.js"></script>
