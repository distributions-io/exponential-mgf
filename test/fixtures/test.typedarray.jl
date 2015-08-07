using Distributions
using JSON

lambda = 51
d = Exponential( 1/lambda )

x = linspace( -50, 50, 100 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("lambda", lambda),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/typedarray.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
