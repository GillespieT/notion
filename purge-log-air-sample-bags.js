if(
	empty(prop("VChanges")), 
	"Not Started", 
	if(
		and(prop("VChanges") > 0, prop("VChanges") < 4), 
		if(
			dateBetween(now(), prop("Last Fill"), "minutes") <= 10, 
			"Wait", 
			"Exchange"
		), 
		if(
			dateBetween(now(), prop("Last Fill"), "minutes") <= 10, 
			"Wait", 
			if(prop("Done?") == false, "Empty", "Done"
			)
		)
	)
)