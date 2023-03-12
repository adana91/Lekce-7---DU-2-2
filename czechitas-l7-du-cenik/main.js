const selectPlan = (planNumber) => {
	if (planNumber === '1') {
        if (checkPlan2 = document.getElementById('plan2').classList.contains('plan--selected')) { 
            return null
        } else if (checkPlan3 = document.getElementById('plan3').classList.contains('plan--selected')) {
            return null
        } else {
            let plan1Chosen = document.getElementById('plan1')
            plan1Chosen.classList.add('plan--selected')
        }
    } else if (planNumber === '2') {
        if (checkPlan1 = document.getElementById('plan1').classList.contains('plan--selected')) { 
            return null
        } else if (checkPlan3 = document.getElementById('plan3').classList.contains('plan--selected')) {
            return null
        } else {
            let plan2Chosen = document.getElementById('plan2')
             plan2Chosen.classList.add('plan--selected')
        }
    } else if (planNumber === '3') {
        if (checkPlan1 = document.getElementById('plan1').classList.contains('plan--selected')) { 
            return null
        } else if (checkPlan2 = document.getElementById('plan2').classList.contains('plan--selected')) {
            return null
        } else {
            let plan3Chosen = document.getElementById('plan3')
            plan3Chosen.classList.add('plan--selected')
        }
    } 
}

// funguje

