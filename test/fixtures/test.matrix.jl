using Distributions
using JSON

lambda = 1.1
d = Exponential( 1/lambda )

x = linspace( -1, 1, 25 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("lambda", lambda),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/matrix.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
