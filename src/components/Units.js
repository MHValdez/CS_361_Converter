export const units = [
{
    "Length": {
        "type": "Base",
        "units": {
            "inches": {
                "system": ["BI", "USC"],
                "abbreviation": ["in", "\""],
                "about_unit":
                "The modern inch is defined as exactly 25.4 mm."
            },
            "feet": {
                "system": ["BI", "USC"],
                "abbreviation": ["ft", "'"],
                "about_unit":
                "The foot is defined as 12 inches."
            },
            "yards": {
                "system": ["BI", "USC"],
                "abbreviation": ["yd"],
                "about_unit":
                "The yard is defined as 3 feet."
            },
            "miles": {
                "system": ["BI", "USC"],
                "abbreviation": ["mi"],
                "about_unit":
                "The mile is defined as 5280 feet."
            },
            "nautical miles": {
                "system": ["NA"],
                "abbreviation": ["M", "NM", "nmi", "m"],
                "about_unit":
                "The modern nuatical mile is defined as exactly 1852 meters."
            },
            "millimeters": {
                "system": ["SI"],
                "abbreviation": ["mm"],
                "about_unit":
                "The millimeter is defined as 1/1000 of a meter."
            },
            "centimeters": {
                "system": ["SI"],
                "abbreviation": ["cm"],
                "about_unit":
                "The centimeter is defined as 1/100 of a meter."
            },
            "meters": {
                "system": ["SI"],
                "abbreviation": ["mm"],
                "about_unit":
                "The modern meter is defined as the distance light travels in a vacuum in 1/299,792,458 of a second."
            },
            "kilometers": {
                "system": ["SI"],
                "abbreviation": ["km"],
                "about_unit":
                "The kilometer is defined as 1,000 meters."
            }
        },
        "about_qty":
            "Length is used to measure distance in space. Negative lengths are only meaningful as vectors."
    },
    "Time": {
        "type": "Base",
        "units": {
            "microseconds": {
                "system": ["SI"],
                "abbreviation": ["μs"],
                "about_unit":
                "The microsecond is defined as 1/1,000,000 of a second."
            },
            "milliseconds": {
                "system": ["SI"],
                "abbreviation": ["ms"],
                "about_unit":
                "The millisecond is defined as 1/1000 of a second."
            },
            "seconds": {
                "system": ["SI"],
                "abbreviation": ["s", "sec", "ss", "\""],
                "about_unit":
                "The modern second is defined as the time taken for a caesium 133 atom to transition between one of its two hyperfine ground states and back 9,192,631,770 times."
            },
            "minutes": {
                "system": ["NA"],
                "abbreviation": ["min", "mm", "'"],
                "about_unit":
                "The minute is defined as 1/60 of an hour."
            },
            "hours": {
                "system": ["NA"],
                "abbreviation": ["h", "hh", "hr"],
                "about_unit":
                "The hour is defined as 1/24 of a day."
            },
            "days": {
                "system": ["NA"],
                "abbreviation": ["d", "dd"],
                "about_unit":
                "A day is the time for the Earth to complete one rotation with respect to the sun. This value is variable but approximated as a constant for this converter."
            },
            "weeks": {
                "system": ["NA"],
                "abbreviation": ["wk"],
                "about_unit":
                "A week is defined as 7 days."
            }
        },
        "about_qty":
        "Time is used to measure event duration. Negative times are only meaningful as vectors."
    },
    "Mass": {
        "type": "Base",
        "units": {
            "ounces": {
                "system": ["BI", "USC"],
                "abbreviation": ["oz", "℥"],
                "about_unit":
                "The ounce is defined as 1/16 of a pound-mass."
            },
            "pounds": {
                "system": ["BI", "USC"],
                "abbreviation": ["lb", "lbm"],
                "about_unit":
                "Sometimes referred to as a pound-mass. The modern pound is defined as 0.45359237 kilograms."
            },
            "short tons": {
                "system": ["USC"],
                "abbreviation": ["T", "t", "sh.t"],
                "about_unit":
                "Also referred to simply as ton in the US. Defined as 2,000 pounds."
            },
            "long tons": {
                "system": ["BI"],
                "abbreviation": ["LT", "l.t"],
                "about_unit":
                "Also referred to simply as ton in many countries. Defined as 2,240 pounds."
            },
            "milligrams": {
                "system": ["SI"],
                "abbreviation": ["mg"],
                "about_unit":
                "Defined as 1/1000 of a gram."
            },
            "grams": {
                "system": ["SI"],
                "abbreviation": ["g"],
                "about_unit":
                "Despite being the base SI unit of mass by name, the modern gram is defined as 1/1000 of a kilogram."
            },
            "kilograms": {
                "system": ["SI"],
                "abbreviation": ["kg"],
                "about_unit":
                "The modern kilogram is defined as a function of the Planck constant where the constant is 6.626070150*10^-34 kg*m^2/s."
            },
            "tonnes": {
                "system": ["NA"],
                "abbreviation": ["t", "MT"],
                "about_unit":
                "Also referred to as the metric ton. Defined as 1,000 kg. Does not conform to the SI standard."
            }
        },
        "about_qty":
        "Mass is an intrinsic property of matter. It can be understood as a mesure of inertia and as the strength of gravitaional attraction."
    },
    "Force": {
        "type": "Derived",
        "units": {
            "ounces": {
                "system": ["BI", "USC"],
                "abbreviation": ["oz"],
                "about_unit":
                "The ounce is defined as 1/16 of a pound-force."
            },
            "pounds": {
                "system": ["BI", "USC"],
                "abbreviation": ["lb", "lbf"],
                "about_unit":
                "Sometimes referred to as a pound-force. The modern pound is defined as the force exerted by the Earth's gravity on 1 pound-mass at sea level."
            },
            "Newtons": {
                "system": ["SI"],
                "abbreviation": ["N"],
                "about_unit":
                "The Newton is defined as 1 kg*m/(s^2)."
            },
            "kiloNewtons": {
                "system": ["SI"],
                "abbreviation": ["kN"],
                "about_unit":
                "The kiloNewton is defined as 1,000 Newtons."
            }
        },
        "about_qty":
        "Force is influence on the acceleration of matter. Intuitively: a push or pull."
    },
    "Speed": {
        "type": "Derived",
        "units": {
            "feet per second": {
                "system": ["BI", "USC"],
                "abbreviation": ["fps", "ft/s"],
                "about_unit":
                "Defined as the distance in feet travled in 1 second."
            },
            "miles per hour": {
                "system": ["BI", "USC"],
                "abbreviation": ["mph"],
                "about_unit":
                "Defined as the distance in miles travled in 1 hour."
            },
            "knots": {
                "system": ["NA"],
                "abbreviation": ["kn", "kt"],
                "about_unit":
                "Defined as the distance in nautical miles travled in 1 hour."
            },
            "meters per second": {
                "system": ["SI"],
                "abbreviation": ["m/s"],
                "about_unit":
                "Defined as the distance in meters travled in 1 second."
            },
            "kilometers per hour": {
                "system": ["SI"],
                "abbreviation": ["kph"],
                "about_unit":
                "Defined as the distance in kilometers travled in 1 hour."
            }
        },
        "about_qty":
        "Speed refers to the magnitude of distance covered in a given amount of time. Velocity is directional speed."
    }    
}];