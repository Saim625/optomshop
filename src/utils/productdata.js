import autolensgroover from "../productImages/Auto_lens_Groover-removebg-preview.png"
import frameheater from "../productImages/frame_heater-removebg-preview.png"
import rimlessdrill from "../productImages/Rimless_Drill_LARGE-removebg-preview.png"
import focimeter_manual_lensmeter from "../productImages/focimeter_manual_lensmeter-removebg-preview.png"
import lens_thickness_gauge from "../productImages/lens_thickness_gauge-removebg-preview.png"
import optical_lens_measure_clock from "../productImages/optical_lens_measure_clock-removebg-preview.png"
import confirmation_flipper_twirl from "../productImages/confirmation_flipper_twirl.png"
import  lens_twirl_small from "../productImages/2lens_twirl_small.gif"
import  retinoscopy_rack_set from "../productImages/retinoscopy-rack-set-removebg-preview.png"
import  retinoscopy_rack_colour from "../productImages/retinoscopy_rack_colour.png"
import  retinoscopy_model_eye from "../productImages/Retinoscopy-Model-Eye.png"
import  cross_cylinder_xcyl_025 from "../productImages/cross_cylinder_xcyl_025-removebg-preview.png"
import  cross_cylinder_set_two_optometry from "../productImages/cross_cylinder_set_two_optometry.png"
import  cross_cylinder_set_four_optometry from "../productImages/cross_cylinder_set_four_optometry.png"
import  universal_trial_frame from "../productImages/universal_trial_frame-removebg-preview.png"
import  professional_trial_frame from "../productImages/professional_trial_frame-removebg-preview.png"
import  trial_frame_kids from "../productImages/trial_frame_kids.jpg"
import  trial_frame_baby_COMO from "../productImages/trial_frame_baby_COMO.gif"
import  skeoch_medik_trial_frame from "../productImages/skeoch_medik_trial_frame.png"
import  Oculus_Type_Trial_Frame from "../productImages/Oculus-Type-Trial-Frame.png"
import  trial_lens_set_CIOM from "../productImages/trial_lens_set_CIOM-removebg-preview.png"
import  trial_lens_set_158case from "../productImages/trial_lens_set_158case.jpg"
import  Deluxe from "../productImages/266Deluxe.gif"
import  phoropter_small from "../productImages/phoropter_large.JPG"
import  slit_lamp_5F1 from "../productImages/slit_lamp_5F1.jpg"
import  dioptrePRISM from "../productImages/20dioptrePRISM.jpg"
import  trial_lens_clip from "../productImages/trial-lens-clip.jpg"
import  ishihara_colour_test from "../productImages/ishihara-colour-test.jpg"
import  frosted_occluder from "../productImages/frosted-occluder.jpg"
import  TVmag from "../productImages/TVmag.jpg"
import  PDmeter_pupilometer from "../productImages/PDmeter_pupilometer-removebg-preview.png"
import  Digital_pupilometer_pdmeter from "../productImages/digital-pupilometer-pdmeter.jpg"
import  tno_book_glasses from "../productImages/tno-book-glasses.jpg"
import  Stereo_Fly_Test from "../productImages/Stereo_Fly_Test.jpg"
import  trial_lenses_glass from "../productImages/trial-lenses-glass.jpg"
import  plastic_rim_trial_lenses from "../productImages/plastic-rim-trial-lenses.jpg"

export const LaboratoryProducts = [
    {
        id: 1,
        name: 'Auto Lens Groover',
        productCode: 'ALG',
        price: 139,
        description: [
            "Manual adjustable, precise controlling",
            "Suitable for plastic and glass lenses",
            "Adjustable groove position (front-central-rear)",
            "Accurate on all profiles",
            "Weight: 3kg"
        ],
        specifications: [
            "Adjustable groove depth: 0 to 0.7mm",
            "Groove width: 0.65mm",
            "Lens thickness: 1.5 to 11mm",
            "Lens diameter: 18 to 70mm",
            "Power: 90w"
        ],
        imageURL: autolensgroover,
        inStock: true,
        deliveryTime: "Delivery within 3-5 days"
    },{
        id: 2,
        name: 'Frame Heater',
        productCode: 'FH1',
        price: 75,
        description: [
            "Easy to use. Simple design.",
            "Optional hot or cold air output"
        ],
        imageURL: frameheater,
        inStock: true,
        deliveryTime: "Delivery 2-5 working days."
    },{
        id: 3,
        name: 'Rimless Lens Drill',
        productCode: "RLD",
        price: 139,
        description: [
                "Suitable for glass, CR39 and Polycarbonate lenses",
                "Simultaneous drilling from both sides of the lens",
                "Suction lens holder",
                "Adjustable angle and position of drilling hole",
                "Diameter of drilling hole accurately adjusted with readable scale", 
                "Drill diameter: 0.8mm - 2.8mm",
                "Comes with full instructions.",
                "Weight: 4.1 kg"
        ],
        imageURL: rimlessdrill,
        inStock: true,
        deliveryTime: "Delivery within 3 to 5 working days."
    },{
        id: 4,
        name: 'Manual Focimeter/Lensmeter (internal reading)',
        subName: 'with prism compensator',
        productCode: 'MFL1',
        price: 325,
        description: [
            "Measurement Range: 0 to Â±25D",
            "Minimum: 0.125D graduation up to Â±5D, 0.25D graduations over Â±5D to Â±25D",
            "Cylinder Axis Range: 0 to 180Â° in 5Â° steps",
            "Prismatic Power Range: 0 to 5∆ (1∆ interval)",
            "Prism base angle: range of 0 ~ 180 degree",
            "Eyepiece Adjustment: Â±5D",
            "Cross Target: makes axes easier to measure",
            "Dimensions: 275mm(h) Ã—130mm(w) Ã—455mm(d)",
            "Weight: 5.6 kg",
            "Lamp: LED (comes with spare)",
            "1 year warranty"
        ],
        imageURL: focimeter_manual_lensmeter,
        inStock: true,
        deliveryTime: "Delivery in 3-5 working days"
    },{
        id: 5,
        name: 'Lens Thickness Gauge',
        productCode: 'LTG',
        price: 15,
        description: [
            "A must have for quality control and job checking by Opticians.",
            "Very easy to use.",
            "Measuring range: 0-11mm, 0.05mm increments",
            "With hardened ball smooth tips.",
            "Comes with protective case."
        ],
        imageURL: lens_thickness_gauge,
        inStock: true,
        deliveryTime: "Delivery within 2-5 working days."
    },{
        id: 6,
        name: 'Optical Lens Measure Clock',
        productCode: 'OLMC',
        price: 32,
        description: [
            "Measure the power of an optical lens.",
            "Very easy to use.",
            "Refractive index: 1.49",
            "Plus and minus measuring in 0.25 steps up to 20D.",
            "With protective cover for measuring tips and storage box."
        ],
        imageURL: optical_lens_measure_clock,
        inStock: true,
        deliveryTime: "Delivery within 2 to 5 working days."
    },
]

export const RefractionProducts= [
    {
        id: 7,
        name: '4 lens binocular confirmation flipper with case',
        productCode: '4BCF',
        price: 27,
        lensPower: '± 0.50',
        description: [
            "4 glass lenses mounted in a metal frame, ±0.50DS power.",
            "Adjustable PD: 40 to 70mm (mm scale shown)"
        ],
        imageURL: confirmation_flipper_twirl,
        inStock: true,
        deliveryTime: "Delivery within 2-5 working days."

    },{
        id: 8,
        name: '2 lens twirl with case',
        productCode: '2LT',
        price: 23,
        variants: [
            {
                power: '±0.25',
            },
            {
                power: '±0.50',
            }
        ],
        description: [
           " 2 glass lenses mounted in a metal frame, with either ± 0.25 or ±0.50DS powers."
        ],
        imageURL: lens_twirl_small,
        inStock: true,
        deliveryTime: "Delivery within 2-5 working days."
    },{
        id: 9,          
        name: 'Retinoscopy Rack Set of Two',
        productCode: 'RRBS2',
        price: 139,
        description: [
            "Sphere: 16 lenses altogether in each bar",
            "concave (-) 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 12, 15",
            "convex (+) 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 12, 15",
            "Calibrated lens powers for accuracy",
            "Excellent for gaining quick retinoscopy results (particularly for children).",
            "Compact set of two",
            "Comes with protective folding case.",
        ],
        imageURL: retinoscopy_rack_set,
        inStock: true,
        deliveryTime: 'Delivery within 3 to 5 days.'
    },{
        id: 10,
        name: 'Retinoscopy Rack Bar Set',
        productCode: 'RRBS',
        price: 75,
        description: [
            "Sphere: 15 lenses altogether (5 in each bar), 3 bars for each of concave (-) and convex (+)",
            "0.50, 1.00, 1.50, 2.00, 2.50, 3.00, 3.50, 4.00, 4.50, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00"
        ],
        imageURL: retinoscopy_rack_colour,
        inStock: true,
        deliveryTime: "Delivery within 3 to 5 days."
    },{
        id: 11,
        name: 'Retinoscopy Model Eye',
        productCode: 'RME',
        price: 75,
        description: [
            "Ideal for practicing retinoscopy refraction by optometry students or trainee ophthalmologists.",
            "Changeable pupil size (3, 5, 7mm).",
            "Adjustable ametropia (-5.00D to +4.00D)",
            "3 cells at front for adding additional sphere or cylinder lenses",
            "Degree of elevation adjustable giving comfortable ergonomics for retinoscopy",
            "Material: Plastic head with a solid metallic base",
            "Size: ~130x80x80mm",
        ],
        imageURL: retinoscopy_model_eye,
        inStock: true,
        deliveryTime: "Delivery 2-5 weeks"
    },{
        id: 12,
        name: 'Single Cross Cylinder',
        productCode: 'CCS1',
        price: 15,
        description: [
            "Order the one you need.",
            "Marked with red (minus) & black (plus) and relevant power."
        ],
        inStock: true,
        variants: [
            {
                power: '±0.25',
                inStock: true
            },
            {
                power: '±0.50',
                inStock: true
            },
            {
                power: '±0.75',
                inStock: false
            },
            {
                power: '±1.00',
                inStock: true
            },
        ],
        imageURL: cross_cylinder_xcyl_025,
        deliveryTime: "Delivery within 2-5 working days.",
    },{
        id: 13,
        name: 'Cross Cylinder Set (0.25 & 0.50)',
        productCode: 'CCS2',
        price: 29,
        description: [
            "Two Cross Cylinders Â± 0.25 and a Â± 0.50",
            "Marked with red (minus) & black (plus) and relevant power.",
            "Comes in packaged case."
        ],
        imageURL: cross_cylinder_set_two_optometry,
        inStock: true,
        deliveryTime: "Delivery within 2-5 days."
    },{
        id: 14,
        name: 'Cross Cylinder Set of Four',
        productCode: 'CCS4',
        price: 44,
        description: [
            "Four Cross Cylinders ± 0.25, ± 0.50, ± 0.75, ± 1.00",
            "Marked with red (minus) & black (plus) and relevant power",
            "Comes in packaged wooden case"
            ],
        specialInfo: 'Supplied in two cases.',    
        imageURL: cross_cylinder_set_four_optometry,
        inStock: false,
        deliveryTime: 'Delivery within 2-5 months.'
    },{ 
        id: 15,
        name: 'Universal Trial Frame',
        productCode: 'TFUNI',
        price: 39,
        description: [
            "Material: metal/plastic",
            "Holds 8 trial lenses, with standard diameter of 38 mm",
            "Fully adjustable nose rest and temple length (with spring hinge for comfort)",
            "Smooth changeable cylinder axis twirls",
            "Wide range of PD adjustment: from 48mm - 80mm",
            "Budget frame ideal for students"
        ],
        imageURL: universal_trial_frame,
        inStock: true,
        deliveryTime: 'Delivery within 3-5 days.'
    },{ 
        id: 16,
        name: 'Professional Trial Frame',
        productCode: 'TFPRO',
        price: 45,
        description: [
            "Material: lightweight titanium alloy & plastic",
            "Holds 8 trial lenses, with standard diameter of 38 mm",
            "Adjustable angle & length of side, and adjustable nosepads",
            "Smooth changeable cylinder axis twirls",
            "One touch PD adjustment (2mm increments): 54, 56, 58, 60, 62, 64, 66, 68, 70",
            "Light-weight: less than 50g",
            "Suitable for professionals",
            "Comes in packaged case."
        ],
        imageURL: professional_trial_frame,
        inStock: true,
        deliveryTime: "Delivery within 2-5 working days."
    },{ 
        id:17,
        name: 'Lightweight Kids Trial Frame',
        productCode: 'TFKIDS',
        range: [
            {
                minprice: 25,
                maxprice: 29,
            }
        ],
        description: [
            "Material: light-weight metal/plastic",
            "holds 6 trial lenses (additional 2 cells in back for sizes >56 PD)",
            "Lens holder with a diameter of 38 mm",
            "Adjustable length sides hug/grip the head",
            "Smooth changeable cylinder axis twirls",
            "Fixed PD, range: 52, 54, 56, 58, 60, 62, 64, 66, 68mm",
            "VERY lightweight and comfortable",
            "An essential if testing children (or those with a sensitive nose, or simply as a back-up)",
            "Each size usually comes in a different colour (shown by PD below)"
        ],
        inStock:true,
        pdVariants: [
            {
                PD: '52',
                price: 29,
                inStock: true
            },
            {
                PD: '54',
                price: 29,
                inStock: true
            },
            {
                PD: '56',
                price: 25,   
                inStock: true
            },
            {
                PD: '58',
                price: 25,
                inStock: true
            },
            {
                PD: '60',
                price: 25, 
                inStock: true 
            },
            {
                PD: '62',
                price: 25, 
                inStock: true
            },{
                PD: '64',
                price: 25, 
                inStock: true
            },{
                PD: '66',
                price: 25, 
                inStock: true
            },{
                PD: '68',
                price: 25,
                inStock: true
            },
        ],
        imageURL: trial_frame_kids,
        inStock: true,
        deliveryTime: "Delivery within 2 to 5 working days.",
    },{ 
        id: 18,
        name: 'Baby trial frame',
        productCode: 'TFBABY',
        price: 29,
        description: [
            "Light and comfortable (suitable for ages: 0 to 2 years)",
            "Always well balanced on the face as it is held at the back by elastic band",
            "The lens holder rings use standard 38 mm trial lens",
            "Comes with case"
        ],
        imageURL: trial_frame_baby_COMO,
        inStock: true,
        deliveryTime: 'Delivery within 2-5 working days.'
    },{ 
        id: 19,
        name: 'Drop Cell Trial Frame',
        productCode: 'TFDC',
        price: 49,
        description: [
            "Also known as Skeoch, Clement Clark, Sussex, Medik type trial frame",
            "Regarded as the most simple and lightweight trial frame available",
            "Perfect for basic refraction needs, testing children or a practice back-up",
            "Material: stainless steel & plastic",
            "Holds 8 trial lenses, with standard diameter of 38 mm",
            "PD adjustable using sliding bridge mechanism (~50-78mm)",
            "Lightweight: less than 50g"
        ],
        imageURL: skeoch_medik_trial_frame,
        inStock: true,
        deliveryTime: 'Delivery within 2 to 5 working days.'
    },{ 
        id: 20,
        name: 'Oculus/Inami Type Trial Frame',
        productCode: 'TFOIT',
        price: 99,
        description: [
            "Light-weight metal/plastic",
            "change up to 5 pairs of trial lenses quickly",
            "Separate right and left PD adjustments from 50-80 mm",
            "Easily adjust nose pad height, angle, and side length",
            "Vertex distance scale",
            "Spare nose pad",
            "Weighs ~61g",
            "Comes in packaged case."
        ],
        imageURL: Oculus_Type_Trial_Frame,
        inStock: true,
        deliveryTime: 'Delivery within 2 to 5 working days'
    },{ 
        id: 21,
        name: 'Trial Lens Set (232 piece) by CIOM',
        price: 799,
        description: [
            "Often considered the best trial lens set by optometrists. Highest quality, made in Italy",

            "Wooden case, lenses of standard size of 38mm with aperture of 22mm. Rough dimensions: 470x360x65mm",

            "Spheres :34 pairs each Plus and Minus 0.12, 0.25 to 4.00 in step of 0.25D, 4.50 to 7.00 in step of 0.50D, 8.00 to 16.00 in step of 1.00D, 18.00 to 20.00 in step of 2.00D",
            "Cylinders : 19 pairs each Plus and Minus 0.12, 0.25 to 3.50 in step of 0.25D, 4.00 to 5.00 in step of 0.50D, 6.00",
            "Prisms : 10 pcs from 1 to 10",
            "Accessories : 10 pcs: red and green glass, stenopaic slit, pin hole, occluder disc, frosted glass, maddox, 2 cross line, neutral glass."
        ],
        options: [
            {
                type: 'individual',
                price: 10,
                inStock: true,
            },
            {
                type: 'set',
                setSize: '232 pieces',
                price: 799,
                inStock: false,
            },
        ],
        imageURL: trial_lens_set_CIOM,
        deliveryTime: "Delivery within 2 to 5 working days"
    },{ 
        id: 22,
        name: 'Trial Lens Set (266 piece)',
        productCode: 'TLS266',
        price: 195,
        description: [
            "Comes in nice leather case, with 3-digit number lock if needed for added security.",
            "Wooden case within leather case can be taken out if required.",
            "Plastic rim lenses of standard size of 38mm with aperture of 26mm.",
            "Cylinder lens axis marked with line, powers stamped on all lenses",
            "Comes with an 0.25 & 0.50 cross-cylinder, manual & lens cloth.",
            "12 prism lenses: 2x 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
            "14 accessory lenses: 2x plano, 2x Maddox rod, 2x cross-hair (for measuring PDs exactly), 2x pinhole,    frosted lens, occluder, stenopeic slit, polarised, red filter, green filter",
            "Spheres: ± 0.25 to 6.00 (in 0.25 steps), 6.50 to 10 (in 0.50 steps), 11 to 16 (in 1D steps), 18, 20.",
            "Cylinders: ± 0.25 to 4 (in 0.25 steps), 4.50 to 6.00 (in 0.50 steps)",
            "This trial lens set is of a high quality. Dimensions in cm: 60(L)x(37(W)x10(D)",
        ],
        imageURL: trial_lens_set_158case,
        inStock: true,
        deliveryTime: "Delivery within 2-5 working days.",
    },{ 
        id: 23,
        name: 'Trial Lens Set (266 piece) Full Aperture Deluxe',
        productCode: 'TLSDLX',
        price: 295,
        description: [
            "Comes in professional Aluminium case, with 3-digit number lock if needed for added security.",
            "Wooden case within outer case can be taken out if required, handle optional extra.",
        "Coloured metal rim lenses of standard size of 38mm with full aperture (red for minus, black for plus)." ,"Currently comes in gold and silver rim.",
            "Cylinder lens axis marked with line.",
            "Comes with an 0.25 & 0.50 cross-cylinder, manual & lens cloth.",
            "12 prism lenses: 2x 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
            "14 accessory lenses: 2x plano, 2x Maddox rod, 2x cross-hair (for measuring PDs exactly), 2x pinhole, frosted lens, occluder, stenopeic slit, polarised, red filter, green filter",
            "Spheres: ± 0.25 to 6.00 (in 0.25 steps), 6.50 to 10 (in 0.50 steps), 11 to 16 (in 1D steps), 18, 20.",
            "Cylinders: ± 0.25 to 4 (in 0.25 steps), 4.50 to 6.00 (in 0.50 steps)",
            "This trial lens set is of a very high quality.",
            "Dimensions in cm: 60(L)x37(W)x11(D)"
        ],
        imageURL: Deluxe,
        inStock: false,
        deliveryTime: 'Delivery within 2-5 working days.'
    },{ 
        id: 24,
        name: 'Full Aperture trial lenses',
        productCode: 'FATL',
        price: 7,
        description: [
            "Like new, minimal use",
            "Gold/red/black rim",
            "Quality glass lenses",
            "Most powers available"
        ],
        imageURL: trial_lenses_glass,
        inStock: true,
        deliveryTime: 'Delivery within 2-5 working days.'
    },{ 
        id: 25,
        name: 'Reduced Aperture trial lenses',
        productCode: 'RATL',
        price: 7,
        description: [
            "New and unused",
            "Most powers available",
            "See trial lens set section for power ranges available",
            "Black (+) and  Red (-)"
        ],
        imageURL: plastic_rim_trial_lenses,
        inStock: true,
        deliveryTime: 'Delivery within 2-5 working days.'
    },
]

export const TestRoomProducts = [
    {
        id: 26,
        name: 'Manual Phoropter Head',
        productCode: "MPH",
        price: 795,
        description: [
            "Sphere Range: +16.75 to -19.00 D (0.25 D steps)",
            "Cylinder Range: 0.00 to -6.00 D (0.25D steps) (0.00 to -8.00 D with additional -2.00D)",
            "Cylinder axis: 0 to 180 (in 5° steps)",
            "Cross Cylinder: ±25 D",
            "Rotary Prisms: 0∆ to 20∆, (in 1∆ steps)",
            `Auxiliary lens dial:
            (O) Open aperture (two positions)    
            (R) Retinoscopic lens, +1.50D
            (P) Polarizing lens: 45° left eye, 135° right eye
            (WMV) or (RMV)-Maddox rod, Vertical
                                            White-left eye
                                            Red-right eye
            (WMH) or (RMH)-Maddox rod. Horizontal
                                            White-left eye
                                            Red-right eye
            (RL) Red lens (GL) Green lens
            (+0.12)- +0.12D sphere
            (PH) Pin hole
            (10∆ L) or (6∆ U) -10∆ base-in-left eye, 6∆ base-up-right eye (dissociating prisms)                                               
            (±0. 50)- fixed cross cylinder                       
            (OC) Occluder`,
            "P.D. range: 48-75mm, 1mm steps",
            "Standard Accessory lenses: Two 0.12D and -2.00 cylinder lenses,  two Plano lenses for sealing front opening.",
            "Standard Accessories: 1 near point card with holder and reading rod, dust cover, face shield, accessory case for lenses.",
            "Dimensions: 318mm (H) x 293mm (W) x 96mm (D)",
            "Weight: 4.5 kg",
            "1 year warranty "
        ],
        addOns: [
            {
                id: 101,
                name: 'Phoropter Arm',
                price: 295,
            }
        ],
        imageURL: phoropter_small,
        inStock: true,
        deliveryTime: "Delivery within 3 to 5 working days."
    },{
        id: 27,
        name: 'Slit Lamp HS40',
        productCode: 'SLHS40',
        price: 2295,
        description: [
            "A high specification slit lamp for a low price.",
            "Haag Streit Type Parallel Microscope",
            "Excellent optical clarity with anti-reflection coated lenses",
            "Total Magnification: 6X, 10X, 16X, 25X, 40X",
            "Eyepiece Magnification: 12.5X",
            "Converging optics making comfortable viewing",
            "Dioptric Adjustment: -6D to +6D",
            "Slit Width: 0-14mm continuously adjustable",
            "Slit Height: 1-14mm continuously adjustable",
            "Aperture Diameter: 14, 10, 5, 3, 2, 1, 0.2mm",
            "Filters: Heat Absorption, UV, Cobalt Blue, red-free",
            "Slit Angle: 0-180° adjustable",
            "Slit Inclination: Elevation: ~20°",
            "Fixation target: red LED",
            "Illumination: 6V 20W Halogen bulb",
            "Comes with stand alone motorised table unit (self assembly)",
            "1 Year Warranty"
        ],
        specialOrder: {
            required: true,
            instructions: 'See Order Form for ordering instructions (payment by cheque/BACS only)',
            orderFormLink: '/docs/OrderForm.pdf' 
        },
        imageURL: slit_lamp_5F1,
        inStock: true,
        deliveryTime: "Delivery in 5-7 days."
    },
]

export const  MiscellaneousProducts = [
    {
        id: 28,
        name: '20 dioptre prism',
        productCode: '20DP',
        price: 35,
        description: [
            `Used in the "20 base out prism test".`,
         "One of the easiest, fastest and most effective ways of screening for binocular vision in young children.",
            "If the child is not cooperative enough to conduct other tests, a 20 dioptre base-out prism is put in front of one eye while shining a penlight (or even using a captivating fixation target). If the eyes adjust to the prism and the corneal reflexes become straight, fusion is present which proves the existence of binocular vision.",
            "Extremely useful for any optometrist / ophthalmologist / orthoptist.",
        ],
        imageURL: dioptrePRISM,
        inStock: true,
        deliveryTime: ' Delivery in 2 to 5 working days.'
    },{
        id: 29,
        name: 'Trial Lens Clip',
        productCode: 'TLC2',
        price: 39,
        description: [
            "Sometimes called Jannelli or Halberg clips.",
            "Set of two, each with spirit level which improves axis accuracy.",
            "3 lens cells in each clip. Case provided."
        ],
        imageURL: trial_lens_clip,
        inStock: true,
        deliveryTime: 'Delivery in 2 to 4 working days'
    },{
        id: 30,
        name: 'Ishihara colour vision test',
        range: [
            {
                minprice: 40,
                maxprice: 75,
            }
        ],
        description: [
            "Refurbished. All plates in good condition.",
            "Cover/spine may show signs of wear."
        ],
        ishiharaVariants: [
            {
                varient: 1,
                name: '38 plate',
                productCode: 'ICVT38',
                price: 75,
                inStock: true
            },
            {
                name: '24 plate - refurbished',
                productCode: 'ICVT24',
                price: 60,
                inStock: true
            },
            {
                name: 'Concise edition - refurbished',
                productCode: 'ICVTC',
                price: 40,
                inStock: true
            }
        ],
        imageURL: ishihara_colour_test,
        inStock: true,
        deliveryTime: "Delivery 2-5 working days."
    },{
        id: 31,
        name: "Optometrist's Occluder",
        productCode: 'OCCF',
        price: 9,
        description: [
            "Solid, but made from a soft & smooth feeling plastic.",
            "No text, logos etc. to distract your patient.",
            "Shaped to fit the eye",
            "Longer handle making it easier to use",
            "Considered the best occluder in the business",
        ],
        imageURL: frosted_occluder,
        inStock: true,
        deliveryTime: "Delivery within 2-5 working days."
    },{
        id: 32,
        name: "Digital TV magnifier - Reading Aid",
        productCode: 'DTVM',
        price: 39,
        description: [
           "A simple hand-held digital reading aid designed for people with low vision. The size of a computer mouse, it connects directly to any TV with video input (cable supplied), allowing you to read newspapers, magazines, recipe cards and even medicine labels easily.",
           "Viewing modes: full colour, black/white, reverse-contrast (e.g. white text on black background, helpful for AMD)",
           "Zoom in/out digitally",
           "Magnification (on 20” monitor): 20x (up to 70x digitally)",
           "Freeze-frame current image button",
           "Comes with TV cable, power supply and instructions. Simply plug and play, very easy to use."
        ],
        purchaseOptions: [
            {
                label: "Single unit",
                quantity: 1,
                price: 39,
                vatIncluded: false,
            },
            {
                label: "Pack of 5",
                quantity: 5,
                price: 180,
                vatIncluded: false,
            }
        ],
        imageURL: TVmag,
        inStock: true,
        deliveryTime: "Delivery within 2 to 5 working days."
    },{
        id: 33,
        name: "Pupilometer 1",
        productCode: 'PM1',
        price: 99,
        description: [
            "Method of measurement: Corneal reflection light coincidence method",
            "Automatically switches OFF one minute after operation is completed.",
            "PD Measurement: 44 to 83mm, 0.5mm increments",
            "Each eye: 22 to 41.5mm, 0.5mm increments",
            "Range of Focus: 30cm to infinity",
            "Comes with breathe/face shield",
            "Power supply: 6V DC (4x AA batteries)"
        ],
        imageURL: PDmeter_pupilometer ,
        inStock: true,
        deliveryTime: "Delivery in 2 to 5 working days."
    },{
        id: 34,
        name: "Pupilometer 2",
        productCode: "PM2",
        price: 119,
        description: [
            "Method of measurement: Corneal reflection light coincidence method",
            "Intuitive controls making it easier to use",
            "Maintenance free LED illumination target, making batteries last longer too",
            "PD Measurement: 40 to 82mm, 0.5mm increments",
            "Each eye: 20 to 41mm, 0.5mm increments",
            "Range of Focus: 30cm to infinity",
            "Detachable breathe/face shield",
            "Power supply: 4.5V DC (3x AAA batteries)"
        ],
        imageURL: Digital_pupilometer_pdmeter ,
        inStock: false,
        deliveryTime: "Delivery in 2 to 5 working days."
    },{
        id: 35,
        name: "TNO stereoscopic vision test",
        productCode: "TNOGLS",
        price: 129,
        description: [
            "Popular stereoscopic vision test for children (using red/green stereograms)",
            "Comes with plastic red/green glasses"
        ],
        imageURL: tno_book_glasses ,
        inStock: true,
        deliveryTime: " Delivery within 2 to 5 working days."
    },{
        id: 36,
        name: "Stereo Fly Test",
        productCode: "SFT",
        price: 129,
        description: [
            "Popular stereoscopic vision test for children (using polarised glasses)",
            "New and Improved version includes: no monocular cues, answer key printed on back of test preventing    loss, uses universal symbols/shapes allowing easier recognition, reinforced binding.",
            "Wider range of measurement from 4800 to 20 seconds.",
            "Comes with 2 polarised glasses, for both young and old children."
        ],
        imageURL: Stereo_Fly_Test ,
        inStock: true,
        deliveryTime: "Delivery within 2 to 5 working days."
    },
]       

export const PRODUCTS = {
   "LABORATORY PRODUCTS": LaboratoryProducts,
    "REFRACTION PRODUCTS": RefractionProducts,
    "TEST ROOM PRODUCTS": TestRoomProducts,
    "MISCELLANEOUS PRODUCTS": MiscellaneousProducts 
} 

export const PRODUCTS1 = {};
    for (const category in PRODUCTS) {
        PRODUCTS[category].forEach((product) => {
            PRODUCTS1[product.id] = product; // Use the product's id as the key and the product as the value
        });
      }

    
