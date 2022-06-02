if(
	empty(prop("VChanges")), 
	"Not Started", 
	if(
		prop("Done?") == true, 
		"Done", 
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
				"Empty"
			)
		)
	)
)
