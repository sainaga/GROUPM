@extends('layouts.master')

@section('content')
	<div style="height: 120px;"></div>
	<section class="container">
		<h4>Hi, {{Auth::user()->username}}, </h4>
		<div class="row">
			<a href="/account/{{Auth::user()->username}}/profile" class="btn btn-xl btn-primary mr-4">My Profile</a>
			<a href="/account/{{Auth::user()->username}}/upcomingevents" class="btn btn-xl btn-primary mr-4 ml-5">Events I am attending</a>
			<a href="/account/{{Auth::user()->username}}/myevents" class="btn btn-xl btn-primary mr-4 ml-5">Events I Am hosting</a>
			<a href="/account/{{Auth::user()->username}}/pastevents" class="btn btn-xl btn-info mr-4 ml-5">Past Events</a>
		</div>
		<h6 class="mt-5">You have hosted {{$screenings_count}} events in the past. </h6>
		@foreach($screenings as $screening)
			<div class="row bg-info p-3">
				<div class="col-lg-2">
					<a href="/screening/{{$screening->slug}}" class="text-dark"> <img class="card-img-top rounded" src="/uploads/movies/{{$screening->movie->image}}" alt="Card image cap" class="img-fluid"> </a>
				</div>
				<div class="col-lg-7 border border-bottom-0 border-top-0 border-left-0">
					<ul class="float-right list-unstyled">
						<span class="text-white">Ticket Details</span>
						<li class="small text-white">Tickets sold: {{$screening->tickets()->count()}}</li>
						<li class="small text-white">Tickets not sold: {{$screening->no_tickets - $screening->tickets()->count()}}</li>
						<li class="small text-white">Date it ended: {{$screening->date->diffForHumans()}}</li>
					</ul>
					<h6 class="text-white"><a href="/screening/{{$screening->slug}}" class="text-dark">{{$screening->movie->title}}</a></h6>
					<p class="small text-white">{{$screening->movie->description}}</p>
					
				</div>
				<div class="col-lg-2">
					<a href="/show/pastattendees/{{$screening->slug}}" class="btn btn-light btn-sm">See those who attended</a>
				</div>
			</div>
		@endforeach

		<h6 class="mt-5">You have attended {{$array_count}} events in the past. </h6>
		@foreach($array as $index => $screen)
			<div class="row bg-info p-3">
				<div class="col-lg-2">
					<a href="/screening/{{$screen[$index]->slug}}" class="text-dark"> <img class="card-img-top rounded" src="/uploads/movies/{{$screen[$index]->movie->image}}" alt="Card image cap" class="img-fluid"> </a>
				</div>
				<div class="col-lg-7 border border-bottom-0 border-top-0 border-left-0">
					<ul class="float-right list-unstyled">
						<span class="text-white">Ticket Details</span>
						<li class="small text-white">Tickets sold: {{$screen[$index]->tickets()->count()}}</li>
						<li class="small text-white">Tickets not sold: {{$screen[$index]->no_tickets - $screen[$index]->tickets()->count()}}</li>
						<li class="small text-white">Date it ended: {{$screen[$index]->date->diffForHumans()}}</li>
					</ul>
					<h6 class="text-white"><a href="/screening/{{$screen[$index]->slug}}" class="text-dark">{{$screen[$index]->movie->title}}</a></h6>
					<p class="small text-white">{{$screen[$index]->movie->description}}</p>
					
				</div>
				<div class="col-lg-2">
					<a href="/show/pastattendees/{{$screen[$index]->slug}}" class="btn btn-light btn-sm">See those who attended</a>
				</div>
			</div>
		@endforeach
	</section>
@endsection