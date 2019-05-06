from django.http import JsonResponse
from api.models import Post, User

# Create your views here.

def post(request):
    posts = User.objects.all()
    json_posts = [c.to_json() for c in posts]
    return JsonResponse(json_posts, safe=False) 


def each_post(request, pk):
    try:
        posts = Post.objects.get(id=pk)
    except Post.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(posts.to_json())