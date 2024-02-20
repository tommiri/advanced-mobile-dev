package com.example.exercise02

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.exercise02.ui.theme.Exercise02Theme
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET

class MainActivity : ComponentActivity()
{
    override fun onCreate(savedInstanceState: Bundle?)
    {
        super.onCreate(savedInstanceState)
        setContent {
            Exercise02Theme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    PostList()
                }
            }
        }
    }
}

data class PostItem(
    val userId: Int,
    val id: Int,
    val title: String,
    val body: String,
)


interface ApiService
{
    @GET("posts")
    suspend fun getPosts(): List<PostItem>
}

object RetrofitInstance
{
    private const val BASE_URL = "https://jsonplaceholder.typicode.com/"

    private val retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    val apiService: ApiService by lazy {
        retrofit.create(ApiService::class.java)
    }
}

@Composable
fun PostList()
{
    var posts by remember { mutableStateOf<List<PostItem>?>(null) }
    var isLoading by remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        isLoading = true
        posts = RetrofitInstance.apiService.getPosts()
        isLoading = false
    }

    if (isLoading)
    {
        CircularProgressIndicator()
    } else
    {
        posts?.let {
            LazyColumn {
                items(it) { post ->
                    PostItemView(post)
                }
            }
        }
    }
}

@Composable
fun PostItemView(post: PostItem)
{
    Text(text = "${post.id}: ${post.title}", modifier = Modifier.padding(8.dp))
}